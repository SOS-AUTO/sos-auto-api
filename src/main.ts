import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Request, Response } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Habilita CORS
  app.enableCors({
    origin: '*', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  // Prefixo global para a API
  app.setGlobalPrefix('api/v1');
  // Redirecionar "/" para "/api/v1"
  const server = app.getHttpAdapter().getInstance();
  server.get('/', (req: Request, res: Response) => {
    res.redirect('/api/v1');
  });
  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('SOS Auto Angola')
    .setDescription(
      'Plataforma digital que conecta motoristas em situações de emergência com mecânicos, guinchos e seguradoras em tempo real. O objetivo é fornecer atendimento rápido, confiável e geolocalizado em todo o território angolano.',
    )
    .setVersion('1.0')
    .addBearerAuth(
    {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      in: 'header',
    },
    'access-token', // Nome da referência que será usada nos endpoints
  )

    .addTag('SOS Auto')
   
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
