import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const swagger = async (app: NestExpressApplication) => {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Boilerplate Turbo Nextjs and Nestjs')
    .setDescription('The API documentation')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/', app, document);
};
