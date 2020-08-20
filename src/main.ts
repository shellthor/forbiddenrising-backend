import { ConfigService } from '@nestjs/config'
import { NestExpressApplication } from '@nestjs/platform-express'
import { NestFactory } from '@nestjs/core'
import { Logger, ValidationPipe } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import helmet from 'helmet'
import compression from 'compression'

import { AppModule } from './app.module'

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true })
  const config: ConfigService = app.get(ConfigService)

  /**
   * Whitelist all arguments so they must be described in a DTO.
   * ForbidNonWhitelisted to not allow requests with extraneous information.
   */
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )

  /**
   * Allows for communication from another domain or port.
   */
  // app.enableCors({
  //   origin: 'http://localhost:3030',
  //   allowedHeaders: ['Authorization', 'content-type'],
  //   credentials: true,
  // });

  app.use(helmet())
  app.use(compression())

  const globalPrefix = config.get<string>('GLOBAL_PREFIX')
  app.setGlobalPrefix(globalPrefix)

  const options = new DocumentBuilder()
    .setTitle('TFR Api')
    .setDescription('The TFR API')
    .setVersion('1.0')
    .addBearerAuth()
    .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('swagger', app, document)
  const port = config.get<number>('PORT') || 3333

  await app.listen(port, () => {
    Logger.log(`Listening at http://localhost:${port}/${globalPrefix}`)
  })
}
bootstrap()
