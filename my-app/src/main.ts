import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PinoLogger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useLogger(app.get(PinoLogger)); // error here
  await app.listen(3000);
}
bootstrap();
