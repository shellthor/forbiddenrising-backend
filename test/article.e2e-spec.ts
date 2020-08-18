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
import { ArticleModule } from '../src/article/article.module';
import { CreateArticleDTO } from '../src/article/dto/create-article.dto';
import { AuthModule } from '../src/auth/auth.module';
import { AuthService } from '../src/auth/auth.service';
import { User } from '../src/user/user.entity';
import { UserModule } from '../src/user/user.module';

MikroORMConfig.dbName = 'tfr_test';
delete MikroORMConfig.user;
delete MikroORMConfig.password;

describe('Articles', () => {
  let app: INestApplication;
  let orm: MikroORM;
  let authService: AuthService;
  let em: EntityManager<IDatabaseDriver<Connection>>;

  /**
   * Seed Data
   */

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
        ArticleModule,
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

  describe(`POST /article`, () => {
    test('throws 401 for unauthenticated', async () => {
      await request(app.getHttpServer()).post('/article').expect(401);
    });

    test('creating an article', async () => {
      const data: CreateArticleDTO = {
        title: 'Example Article',
        subtitle: 'Example Subtitle',
        content: 'Example Content',
        header: 'nul',
      };

      await request(app.getHttpServer())
        .post('/article')
        .send(data)
        .set('Authorization', `Bearer ${jwt}`)
        .expect(201);
    });
  });

  describe('GET /article', () => {
    test('the presence of created articles', async () => {
      const resp = await request(app.getHttpServer()).get('/article').expect(200);

      expect(Array.isArray(resp.body)).toBe(true);
      expect(Array.isArray(resp.body[0])).toBe(true);
      expect(resp.body[0][0].title).toBe('Example Article');
      expect(resp.body[1]).toBe(1);
    });

    test('article should show pagination structure', async () => {
      const data: CreateArticleDTO = {
        title: 'Example Article 2',
        subtitle: 'Example Subtitle 2',
        content: 'Example Content2 ',
        header: 'nul 2',
      };

      await request(app.getHttpServer())
        .post('/article')
        .send(data)
        .set('Authorization', `Bearer ${jwt}`)
        .expect(201);

      const resp = await request(app.getHttpServer()).get('/article').expect(200);

      expect(Array.isArray(resp.body)).toBe(true);
      expect(Array.isArray(resp.body[0])).toBe(true);
      expect(resp.body[0][0].title).toBe('Example Article 2');
      expect(resp.body[0][1].title).toBe('Example Article');
      expect(resp.body[1]).toBe(2);
    });
  });

  describe('GET /article/:id', () => {
    test('finding one article', async () => {
      const first = await request(app.getHttpServer()).get('/article/1').expect(200);

      expect(first.body.title).toBe('Example Article');

      const second = await request(app.getHttpServer()).get('/article/2').expect(200);

      expect(second.body.title).toBe('Example Article 2');
    });
  });

  describe('PATCH /article/:id', () => {
    test('should fail for unauthorized users', async () => {
      await request(app.getHttpServer()).patch('/article/1').expect(401);
    });

    test('should update only targeted attributes', async () => {
      await request(app.getHttpServer())
        .patch('/article/2')
        .send({ content: 'Changed Content' })
        .set('Authorization', `Bearer ${jwt}`)
        .expect(200);

      const resp = await request(app.getHttpServer()).get('/article/2').expect(200);

      expect(resp.body.id).toBe(2);
      expect(resp.body.title).toBe('Example Article 2');
      expect(resp.body.content).toBe('Changed Content');
    });
  });

  describe('DELETE /article/:id', () => {
    test('should fail for unauthorized users', async () => {
      await request(app.getHttpServer()).delete('/article/2').expect(401);
    });

    test('should delete articles', async () => {
      await request(app.getHttpServer())
        .delete('/article/2')
        .set('Authorization', `Bearer ${jwt}`)
        .expect(200);
    });

    test('should fail on subsequent deletion attempts', async () => {
      await request(app.getHttpServer())
        .delete('/article/2')
        .set('Authorization', `Bearer ${jwt}`)
        .expect(404);
    });
  });

  afterAll(async () => {
    await orm.close();
    await app.close();
  });
});
