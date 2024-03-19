import { Controller, Get, Header, Logger } from '@nestjs/common';

@Controller('health')
export class HealthController {
  private readonly logger = new Logger(HealthController.name);
  constructor() {}

  @Get()
  getHealth() {
    this.logger.log('❌ Logging with Nestjs Logger');
    return { status: 'UP', timestamp: new Date().toISOString() };
  }
}
