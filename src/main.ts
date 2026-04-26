import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Nest JS Course JWT Auth API')
    .setDescription('API doc for Nest JS Course')
    .setVersion('1.0.0')
    .setContact('Pavel', 'https://example.com', 'support@example.com')
    .setExternalDoc('yaml', 'swagger.yaml')
    .setExternalDoc('json', 'swagger.json')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/docs', app, document, {
    jsonDocumentUrl: 'swagger.json',
    yamlDocumentUrl: 'swagger.yaml',
    customSiteTitle: 'Nest JS Course API',
  });

  await app.listen(3000);
}
bootstrap();
