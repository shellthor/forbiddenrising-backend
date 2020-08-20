import Joi from 'joi'
import { Connection, EntityManager, IDatabaseDriver, MikroORM } from '@mikro-orm/core'
import { CacheInterceptor, INestApplication, ValidationPipe } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PassportModule } from '@nestjs/passport'
import { Test } from '@nestjs/testing'
import { MikroOrmModule } from '@mikro-orm/nestjs'
import request from 'supertest'
import { v4 } from 'uuid'
import MikroORMConfig from '../mikro-orm.config'
import { Roles } from '../src/app.roles'
import { AuthModule } from '../src/auth/auth.module'
import { AuthService } from '../src/auth/auth.service'
import { CreateQuestionDto, UpdateQuestionDto } from '../src/form-question/dto'
import { FieldType } from '../src/form-question/enums/field-type.enum'
import { FileTypes } from '../src/form-question/enums/file-types.enum'
import { FormQuestion } from '../src/form-question/question.entity'
import { CreateFormDto } from '../src/form/dto/create-form.dto'
import { Form } from '../src/form/form.entity'
import { FormModule } from '../src/form/form.module'
import { User } from '../src/user/user.entity'
import { UserModule } from '../src/user/user.module'

MikroORMConfig.dbName = 'tfr_test'
delete MikroORMConfig.user
delete MikroORMConfig.password

describe('Form Questions', () => {
  let app: INestApplication
  let orm: MikroORM
  let authService: AuthService
  let em: EntityManager<IDatabaseDriver<Connection>>

  /**
   * Seeding Data
   */

  let user: User
  let form: Form
  let formId: string
  let formIdTwo: string
  let jwt: string

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        MikroOrmModule.forRoot(MikroORMConfig),
        ConfigModule.forRoot({
          isGlobal: true,
          validationSchema: Joi.object({
            NODE_ENV: Joi.string().default('test'),
            PORT: Joi.number().default(3000),
            JWT_SECRET: Joi.string().default('testing'),
            DISCORD_CLIENT_ID: Joi.string().default('null'),
            DISCORD_SECRET: Joi.string().default('null'),
            DISCORD_WEBHOOK: Joi.string().default('null'),
            DISCORD_CALLBACK: Joi.string().default('http://localhost:3030/callback'),
            BLIZZARD_CLIENTID: Joi.string().default('null'),
            BLIZZARD_SECRET: Joi.string().default('null'),
            BLIZZARD_CALLBACK: Joi.string().default('null'),
          }),
        }),
        PassportModule.register({ defaultStrategy: 'blizzard' }),
        UserModule,
        AuthModule,
        FormModule,
        FormQuestion,
      ],
    })
      .overrideInterceptor(CacheInterceptor)
      .useValue({})
      .compile()

    app = moduleRef.createNestApplication()
    orm = moduleRef.get(MikroORM)
    authService = moduleRef.get(AuthService)

    em = orm.em.fork()

    const generator = orm.getSchemaGenerator()
    await generator.ensureDatabase()
    await generator.dropSchema()
    await generator.createSchema()

    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    )

    await app.init()

    /**
     * Seeding Data
     */

    user = em.create(User, {
      discord_id: '123456789',
      discord_username: 'JaneDoe',
      discord_discriminator: '1337',
      roles: [Roles.GuildMaster],
    })

    em.persist(user)

    form = em.create(Form, {
      name: 'Example Form',
    } as CreateFormDto)

    em.persist(form)

    await em.flush()

    jwt = authService.signToken(user)
  })

  afterAll(async () => {
    await orm.close()
    await app.close()
  })

  describe('POST /question', () => {
    test('throws 401 for unauthenticated', async () => {
      await request(app.getHttpServer()).post('/form').expect(401)
    })

    test('should create form questions', async () => {
      const dto: CreateQuestionDto = {
        formId: 1,
        question: 'Example Question',
        required: true,
        order: 1,
        type: FieldType.TEXTINPUT,
      }

      const resp = await request(app.getHttpServer())
        .post('/question')
        .send(dto)
        .set('Authorization', `Bearer ${jwt}`)
        .expect(201)

      expect(typeof resp.body.id).toBe('string')
      expect(resp.body.question).toBe('Example Question')
      expect(resp.body.type).toBe('TextInput')

      const dtoTwo: CreateQuestionDto = {
        formId: 1,
        question: 'Second Example Question',
        required: true,
        order: 2,
        type: FieldType.TEXTINPUT,
      }

      const respTwo = await request(app.getHttpServer())
        .post('/question')
        .send(dtoTwo)
        .set('Authorization', `Bearer ${jwt}`)
        .expect(201)

      expect(typeof resp.body.id).toBe('string')
      expect(respTwo.body.question).toBe('Second Example Question')
      expect(respTwo.body.type).toBe('TextInput')

      formId = resp.body.id
      formIdTwo = respTwo.body.id
    })

    test('should throw for invalid question choices', async () => {
      await request(app.getHttpServer())
        .post('/question')
        .send({
          formId: 1,
          question: 'Invalid Question',
          order: 1,
          required: true,
          choices: ['Apple', 'Banana'],
          type: FieldType.TEXTINPUT,
        } as CreateQuestionDto)
        .set('Authorization', `Bearer ${jwt}`)
        .expect(400)
    })

    test('should throw for missing question choices', async () => {
      await request(app.getHttpServer())
        .post('/question')
        .send({
          formId: 1,
          question: 'Invalid Question',
          order: 1,
          required: true,
          type: FieldType.CHECKBOX,
        } as CreateQuestionDto)
        .set('Authorization', `Bearer ${jwt}`)
        .expect(400)
    })

    test('should throw for questions that cannot have multiples', async () => {
      await request(app.getHttpServer())
        .post('/question')
        .send({
          formId: 1,
          question: 'Invalid Question',
          order: 1,
          required: true,
          multiple: 2,
          type: FieldType.TEXTINPUT,
        } as CreateQuestionDto)
        .set('Authorization', `Bearer ${jwt}`)
        .expect(400)
    })

    test('should throw for too-few question choices with multiple', async () => {
      await request(app.getHttpServer())
        .post('/question')
        .send({
          formId: 1,
          question: 'Invalid Question',
          order: 1,
          required: true,
          choices: ['Single'],
          multiple: 2,
          type: FieldType.SELECT,
        } as CreateQuestionDto)
        .set('Authorization', `Bearer ${jwt}`)
        .expect(400)
    })

    test('should throw for file types for non-file fields', async () => {
      await request(app.getHttpServer())
        .post('/question')
        .send({
          formId: 1,
          question: 'Invalid Question',
          order: 1,
          required: true,
          fileTypes: [FileTypes.Image],
          type: FieldType.TEXTINPUT,
        } as CreateQuestionDto)
        .set('Authorization', `Bearer ${jwt}`)
        .expect(400)
    })

    test('should throw for upload fields missing file types', async () => {
      await request(app.getHttpServer())
        .post('/question')
        .send({
          formId: 1,
          question: 'Invalid Question',
          order: 1,
          required: true,
          type: FieldType.UPLOAD,
        } as CreateQuestionDto)
        .set('Authorization', `Bearer ${jwt}`)
        .expect(400)
    })
  })

  describe('GET /question', () => {
    test('should return all questions for a form', async () => {
      const resp = await request(app.getHttpServer()).get('/question/form/1').expect(200)

      expect(Array.isArray(resp.body)).toBe(true)
      expect(typeof resp.body[0].id).toBe('string')
      expect(resp.body[0].question).toBe('Example Question')
    })
  })

  describe('GET /question/:id', () => {
    test('should return single questions', async () => {
      const resp = await request(app.getHttpServer()).get(`/question/${formId}`).expect(200)

      expect(typeof resp.body.id).toBe('string')
      expect(resp.body.question).toBe('Example Question')
    })

    test('should 404 on missing questions', async () => {
      await request(app.getHttpServer()).get(`/question/${v4()}`).expect(404)
    })
  })

  describe('UPDATE /question/:id', () => {
    test('should fail for unauthenticated users', async () => {
      await request(app.getHttpServer()).patch(`/question/${formId}`).expect(401)
    })

    test('should modify questions', async () => {
      const resp = await request(app.getHttpServer())
        .patch(`/question/${formId}`)
        .send({ question: 'Modified Question' } as UpdateQuestionDto)
        .set('Authorization', `Bearer ${jwt}`)
        .expect(200)

      expect(typeof resp.body.id).toBe('string')
      expect(resp.body.question).toBe('Modified Question')
    })
  })

  describe('DELETE /question/:id', () => {
    test('should fail for unauthenticated users', async () => {
      await request(app.getHttpServer()).delete(`/question/${formIdTwo}`).expect(401)
    })

    test('should delete questions', async () => {
      await request(app.getHttpServer())
        .delete(`/question/${formIdTwo}`)
        .set('Authorization', `Bearer ${jwt}`)
        .expect(200)
    })

    test('should throw 404 on sequential deletion calls', async () => {
      await request(app.getHttpServer())
        .delete(`/question/${formIdTwo}`)
        .set('Authorization', `Bearer ${jwt}`)
        .expect(404)
    })
  })
})
