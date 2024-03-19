import { Module } from '@nestjs/common';
import { HealthModule } from './health';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    LoggerModule
      .forRoot
      //my default config for logger
      (),
    HealthModule,
  ],
  controllers: [],
  providers: [],
})
export class CommonsModule {}
