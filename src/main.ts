import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('SOS Auto Angola')
    .setDescription('Plataforma digital que conecta motoristas em situacoes de emergencia com mecanicos,guinchos e seguradoras em tempo real. O objetivo é fornecer atendimento rapido, confiavel e geolocalizado em todo o territorio angolano.')
    .setVersion('1.0')
    .addBearerAuth() 
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document); 


  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
