import Joi from 'joi'
import { Connection, EntityManager, IDatabaseDriver, MikroORM } from '@mikro-orm/core'
import { CacheInterceptor, INestApplication, ValidationPipe, HttpService } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PassportModule } from '@nestjs/passport'
import { Test } from '@nestjs/testing'
import Bull, { Queue } from 'bull'
import fs from 'fs'
import { MikroOrmModule } from '@mikro-orm/nestjs'
import path from 'path'
import request from 'supertest'
import MikroORMConfig from '../mikro-orm.config'
import { Roles } from '../src/app.roles'
import { AuthModule } from '../src/auth/auth.module'
import { AuthService } from '../src/auth/auth.service'
import { BlizzardModule } from '../src/blizzard/blizzard.module'
import { ProfileService } from '../src/blizzard/services/profile/profile.service'
import { FileUpload } from '../src/file/file.entity'
import { FileModule } from '../src/file/file.module'
import { FormCharacterModule } from '../src/form-character/form-character.module'
import { CreateQuestionDto } from '../src/form-question/dto'
import { FieldType } from '../src/form-question/enums/field-type.enum'
import { FormQuestion } from '../src/form-question/question.entity'
import { FormSubmission } from '../src/form-submission/form-submission.entity'
import { FormSubmissionModule } from '../src/form-submission/form-submission.module'
import { Form } from '../src/form/form.entity'
import { FormModule } from '../src/form/form.module'
import { RaiderIOService } from '../src/raiderIO/raiderIO.service'
import { User } from '../src/user/user.entity'
import { UserModule } from '../src/user/user.module'
import { ProfileServiceMock } from './mocks/profile-api.factory'
import { RaiderIOServiceMock } from './mocks/raiderio.factory'
import { AxiosResponse } from 'axios'

describe('Form Submissions', () => {
  let app: INestApplication
  let orm: MikroORM
  let authService: AuthService
  let em: EntityManager<IDatabaseDriver<Connection>>
  let discordQueue: Queue
  let formQueue: Queue
  let discordQueueSpy: jest.SpyInstance<Promise<Bull.Job>>
  let formQueueSpy: jest.SpyInstance<Promise<Bull.Job>>

  /**
   * Seeding Variables
   */

  let user: User
  let guestUser: User
  let form: Form
  let question: FormQuestion
  let jwt: string
  let guestJwt: string

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
            BLIZZARD_CLIENTID: Joi.string().default('fake_client_id'),
            BLIZZARD_SECRET: Joi.string().default('fake_secret'),
            BLIZZARD_CALLBACK: Joi.string().default('http://localhost:3030/callback'),
          }),
        }),
        PassportModule.register({ defaultStrategy: 'blizzard' }),
        UserModule,
        AuthModule,
        FormModule,
        BlizzardModule,
        FormSubmissionModule,
        FormCharacterModule,
        FileModule,
      ],
    })
      .overrideInterceptor(CacheInterceptor)
      .useValue({})
      .compile()

    app = moduleRef.createNestApplication()
    orm = moduleRef.get(MikroORM)
    authService = moduleRef.get(AuthService)
    discordQueue = moduleRef.get('BullQueue_discord')
    formQueue = moduleRef.get('BullQueue_form')
    const httpService = moduleRef.get(HttpService)

    em = orm.em.fork()

    const httpMock: any = {
      toPromise: () => httpMock,
    }

    jest.spyOn(httpService, 'post').mockImplementation(() => httpMock)
    discordQueueSpy = jest.spyOn(discordQueue, 'add')
    formQueueSpy = jest.spyOn(formQueue, 'add')

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

    guestUser = em.create(User, {
      discord_id: '987987987',
      discord_username: 'JacobDoe',
      discord_discriminator: '7331',
      roles: [Roles.Guest],
    })

    form = em.create(Form, {
      name: 'Testing Form',
    })

    question = new FormQuestion()

    question.assign({
      question: 'Example Question',
      order: 1,
      type: FieldType.TEXTINPUT,
      required: true,
    } as CreateQuestionDto)

    form.questions.add(question)

    em.persist(form)
    em.persist(user)
    em.persist(guestUser)

    await em.flush()

    jwt = authService.signToken(user)
    guestJwt = authService.signToken(guestUser)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('POST /upload', () => {
    test('should reject unauthenticated users', async () => {
      await request(app.getHttpServer()).post('/submission/upload').expect(401)
    })

    test('should upload images', async () => {
      await request(app.getHttpServer())
        .post('/submission/upload')
        .set('Authorization', `Bearer ${jwt}`)
        .attach(
          'files',
          path.resolve(__dirname, './placeholders/wilfried-santer-zelgyeLINKc-unsplash.jpg'),
        )
        .expect(201)
    })
  })

  describe('POST /submission', () => {
    test('throws 401 for unauthenticated', async () => {
      await request(app.getHttpServer()).post('/submission').expect(401)
    })

    test('should create new submissions', async () => {
      const mock = new ProfileServiceMock(123456789, 'Tesali')
      const rioMock = new RaiderIOServiceMock(123456789, 'Tesali')

      jest
        .spyOn(ProfileService.prototype, 'getCharacterProfileSummary')
        .mockResolvedValue(mock.getCharacterProfileSummary())

      jest
        .spyOn(ProfileService.prototype, 'getCharacterEquipmentSummary')
        .mockResolvedValue(mock.getCharacterEquipmentSummary())

      jest
        .spyOn(ProfileService.prototype, 'getCharacterSpecializationsSummary')
        .mockResolvedValue(mock.getCharacterSpecializationsSummary())

      jest
        .spyOn(ProfileService.prototype, 'getCharacterMediaSummary')
        .mockResolvedValue(mock.getCharacterMediaSummary())

      jest
        .spyOn(ProfileService.prototype, 'getCharacterRaids')
        .mockResolvedValue(mock.getCharacterRaids())

      jest
        .spyOn(RaiderIOService.prototype, 'getCharacterRaiderIO')
        .mockResolvedValue(rioMock.getCharacterRaiderIO('Tesali'))

      await request(app.getHttpServer())
        .post('/submission')
        .set('Authorization', `Bearer ${jwt}`)
        .send({
          formId: 1,
          answers: {
            [`${question.id}`]: 'Example Answer',
          },
          files: [],
          characters: [
            {
              name: 'Duckys',
              realm: 'area-52',
              region: 'us',
            },
          ],
        })
        .expect(201)

      expect(formQueueSpy).toBeCalledTimes(1)
      expect(discordQueueSpy).toBeCalledTimes(1)
    })

    test('should throw if trying to create new submissions with one open', async () => {
      await request(app.getHttpServer())
        .post('/submission')
        .set('Authorization', `Bearer ${jwt}`)
        .send({
          formId: 1,
          answers: {
            [`${question.id}`]: 'Example Answer',
          },
          files: [],
          characters: [
            {
              name: 'Duckys',
              realm: 'area-52',
              region: 'us',
            },
          ],
        })
        .expect(400)
    })

    test('should accept images in submissions', async () => {
      const submission = await em.findOneOrFail(FormSubmission, { id: 1 })

      em.remove(FormSubmission)

      await em.flush()

      const resp = await request(app.getHttpServer())
        .post('/submission')
        .set('Authorization', `Bearer ${jwt}`)
        .send({
          formId: 1,
          answers: {
            [`${question.id}`]: 'Example Answer',
          },
          files: [1],
          characters: [
            {
              name: 'Duckys',
              realm: 'area-52',
              region: 'us',
            },
          ],
        })
        .expect(201)

      expect(Array.isArray(resp.body.files)).toBe(true)
      expect(resp.body.files[0]).toBe(1)
      expect(formQueueSpy).toBeCalledTimes(1)
      expect(discordQueueSpy).toBeCalledTimes(1)
    })

    test('should reject adding non-owned images to a submission', async () => {
      await request(app.getHttpServer())
        .post('/submission')
        .set('Authorization', `Bearer ${guestJwt}`)
        .send({
          formId: 1,
          answers: {
            [`${question.id}`]: 'Example Answer',
          },
          files: [1],
          characters: [
            {
              name: 'Jackson',
              realm: 'area-52',
              region: 'us',
            },
          ],
        })
        .expect(401)
    })
  })

  describe('DELETE /submission/file/:id', () => {
    test('should delete image entity and files', async () => {
      const image = await em.findOneOrFail(FileUpload, 1)

      const relPath = path.resolve(__dirname, '../', image.path)

      await request(app.getHttpServer())
        .delete('/submission/file/1')
        .set('Authorization', `Bearer ${jwt}`)
        .expect(200)

      const checkPromise = fs.promises.access(relPath, fs.constants.F_OK)

      expect(checkPromise).rejects.toThrow()
    })

    test('should only allow regular users to delete their own images', async () => {
      const applicantUser = em.create(User, {
        discord_id: '987654321',
        discord_username: 'JackGeneric',
        discord_discriminator: '2661',
        roles: [Roles.Guest],
      })

      em.persist(applicantUser)

      await em.flush()

      const secondJWT = authService.signToken(applicantUser)

      // Uploading image from GuildMaster role to check failed deletion.
      await request(app.getHttpServer())
        .post('/submission/upload')
        .set('Authorization', `Bearer ${jwt}`)
        .attach('files', path.resolve(__dirname, './placeholders/xiao-jinshi-752681-unsplash.jpg'))
        .expect(201)

      const resp = await request(app.getHttpServer())
        .delete('/submission/file/2')
        .set('Authorization', `Bearer ${secondJWT}`)
        .expect(401)

      expect(resp.body.message).toBe('You do not own this file')
    })
  })

  describe('GET /submission/user', () => {
    test('should retrieve all submissions for a user', async () => {
      const resp = await request(app.getHttpServer())
        .get('/submission/user')
        .set('Authorization', `Bearer ${jwt}`)
        .expect(200)

      expect(Array.isArray(resp.body)).toBeTruthy()
      expect(resp.body[0][0].id).toBe(2)
      expect(resp.body[1]).toBe(1)
    })
  })

  describe('GET /submission/user/open', () => {
    test('should retrieve all open submissions for a user', async () => {
      const resp = await request(app.getHttpServer())
        .get('/submission/user/open')
        .set('Authorization', `Bearer ${jwt}`)
        .expect(200)

      expect(Array.isArray(resp.body)).toBeTruthy()
      expect(resp.body[0][0].id).toBe(2)
      expect(resp.body[0][0].status).toBe('open')
      expect(resp.body[1]).toBe(1)
    })
  })

  describe('GET /submission/status/:status', () => {
    test('should retrieve the newest open submission by status', async () => {
      const resp = await request(app.getHttpServer())
        .get('/submission/status/open')
        .set('Authorization', `Bearer ${jwt}`)
        .expect(200)

      expect(resp.body.id).toBe(2)
      expect(resp.body.status).toBe('open')

      await request(app.getHttpServer())
        .get('/submission/status/rejected')
        .set('Authorization', `Bearer ${jwt}`)
        .expect(404)
    })
  })

  describe('GET /submission/:id', () => {
    test('should retrieve an individual submission', async () => {
      const resp = await request(app.getHttpServer()).get('/submission/2').expect(200)

      expect(resp.body.id).toBe(2)
      expect(resp.body.status).toBe('open')
    })
  })

  describe('GET /submission', () => {
    test('should return all submissions', async () => {
      const resp = await request(app.getHttpServer()).get('/submission').expect(200)

      expect(Array.isArray(resp.body)).toBeTruthy()
      expect(typeof resp.body[1]).toBe('number')
    })
  })

  describe('PATCH /submission/:id', () => {
    test('should update submissions', async () => {
      const resp = await request(app.getHttpServer())
        .patch('/submission/2')
        .send({ status: 'rejected' })
        .set('Authorization', `Bearer ${jwt}`)
        .expect(200)

      expect(resp.body.id).toBe(2)
      expect(resp.body.status).toBe('rejected')
      expect(discordQueueSpy).toBeCalledTimes(1)
    })

    test('should disallow regular users to update submissions they do not own', async () => {
      await request(app.getHttpServer())
        .patch('/submission/2')
        .send({ status: 'rejected' })
        .set('Authorization', `Bearer ${guestJwt}`)
        .expect(403)
    })

    test('should throw on users trying to make illegal status changes', async () => {
      const submission = await request(app.getHttpServer())
        .post('/submission')
        .set('Authorization', `Bearer ${guestJwt}`)
        .send({
          formId: 1,
          answers: {
            [`${question.id}`]: 'Example Answer',
          },
          files: [],
          characters: [
            {
              name: 'Duckys',
              realm: 'area-52',
              region: 'us',
            },
          ],
        })
        .expect(201)

      await request(app.getHttpServer())
        .patch(`/submission/${submission.body.id}`)
        .send({ status: 'rejected' })
        .set('Authorization', `Bearer ${guestJwt}`)
        .expect(403)
    })

    test('should not invoke a discord notification if the status was not changed', async () => {
      await request(app.getHttpServer())
        .patch('/submission/2')
        .send({ status: 'rejected' })
        .set('Authorization', `Bearer ${jwt}`)
        .expect(200)

      expect(discordQueueSpy).not.toBeCalled()
    })
  })

  describe('DELETE /submission/:id', () => {
    test('should update submissions', async () => {
      await request(app.getHttpServer())
        .delete('/submission/2')
        .set('Authorization', `Bearer ${jwt}`)
        .expect(200)
    })

    test('should throw 404 on subsequent deletion attempts', async () => {
      await request(app.getHttpServer())
        .delete('/submission/2')
        .set('Authorization', `Bearer ${jwt}`)
        .expect(404)
    })
  })
})
