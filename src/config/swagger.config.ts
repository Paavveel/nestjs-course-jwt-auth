import { DocumentBuilder } from '@nestjs/swagger';

export function getSwaggerConfig() {
  return new DocumentBuilder()
    .setTitle('Nest JS Course JWT Auth API')
    .setDescription('API doc for Nest JS Course')
    .setVersion('1.0.0')
    .addBearerAuth()
    .setExternalDoc('yaml', 'swagger.yaml')
    .setExternalDoc('json', 'swagger.json')
    .build();
}
