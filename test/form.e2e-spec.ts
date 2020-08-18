import Joi from 'joi';
import { Connection, EntityManager, IDatabaseDriver, MikroORM } from '@mikro-orm/core';
import { CacheInterceptor, INestApplication, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { Test } from '@nestjs/testing';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import request from 'supertest';
import MikroORMConfig from '../mikro-orm.config';
import { Roles } from '../src/app.roles';
import { AuthModule } from '../src/auth/auth.module';
import { AuthService } from '../src/auth/auth.service';
import { CreateFormDto } from '../src/form/dto/create-form.dto';
import { FormModule } from '../src/form/form.module';
import { User } from '../src/user/user.entity';
import { UserModule } from '../src/user/user.module';

MikroORMConfig.dbName = 'tfr_test';
delete MikroORMConfig.user;
delete MikroORMConfig.password;

describe('Forms', () => {
  let app: INestApplication;
  let orm: MikroORM;
  let authService: AuthService;
  let em: EntityManager<IDatabaseDriver<Connection>>;
  let user: User;
  let jwt: string;

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
      ],
    })
      .overrideInterceptor(CacheInterceptor)
      .useValue({})
      .compile();

    app = moduleRef.createNestApplication();
    orm = moduleRef.get(MikroORM);
    authService = moduleRef.get(AuthService);

    em = orm.em.fork();

    const generator = orm.getSchemaGenerator();
    await generator.ensureDatabase();
    await generator.dropSchema();
    await generator.createSchema();

    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    );

    await app.init();

    /**
     * Seeding Data
     */

    user = em.create(User, {
      discord_id: '123456789',
      discord_username: 'JaneDoe',
      discord_discriminator: '1337',
      roles: [Roles.GuildMaster],
    });

    await em.persistAndFlush(user);

    jwt = authService.signToken(user);
  });

  describe('POST /form', () => {
    test('throws 401 for unauthenticated', async () => {
      await request(app.getHttpServer()).post('/form').expect(401);
    });

    test('should create forms', async () => {
      const data: CreateFormDto = {
        name: 'Test Form',
      };

      const resp = await request(app.getHttpServer())
        .post('/form')
        .send(data)
        .set('Authorization', `Bearer ${jwt}`)
        .expect(201);

      expect(resp.body.id).toBe(1);
      expect(resp.body.name).toBe('Test Form');
    });
  });

  describe('GET /form', () => {
    test('should return all forms', async () => {
      const resp = await request(app.getHttpServer()).get('/form').expect(200);

      expect(Array.isArray(resp.body)).toBe(true);
      expect(resp.body[0].id).toBe(1);
      expect(resp.body[0].name).toBe('Test Form');
    });
  });

  describe('GET /form/:id', () => {
    test('should return single forms', async () => {
      const resp = await request(app.getHttpServer()).get('/form/1').expect(200);

      expect(resp.body.id).toBe(1);
      expect(resp.body.name).toBe('Test Form');
    });

    test('should 404 on missing forms', async () => {
      await request(app.getHttpServer()).get('/form/5').expect(404);
    });
  });

  describe('UPDATE /form/:id', () => {
    test('should fail for unauthenticated users', async () => {
      await request(app.getHttpServer()).patch('/form/1').expect(401);
    });

    test('should modify forms', async () => {
      const resp = await request(app.getHttpServer())
        .patch('/form/1')
        .send({ name: 'Modified Title' })
        .set('Authorization', `Bearer ${jwt}`)
        .expect(200);

      expect(resp.body.id).toBe(1);
      expect(resp.body.name).toBe('Modified Title');
    });
  });

  describe('DELETE /form/:id', () => {
    test('should fail for unauthenticated users', async () => {
      await request(app.getHttpServer()).delete('/form/1').expect(401);
    });

    test('should delete forms', async () => {
      await request(app.getHttpServer())
        .delete('/form/1')
        .set('Authorization', `Bearer ${jwt}`)
        .expect(200);
    });

    test('should throw 404 on sequential deletion calls', async () => {
      await request(app.getHttpServer())
        .delete('/form/1')
        .set('Authorization', `Bearer ${jwt}`)
        .expect(404);
    });
  });

  afterAll(async () => {
    await orm.close();
    await app.close();
  });
});
