import { Controller, Get, Header } from '@nestjs/common';

@Controller('health')
export class HealthController {
  constructor() {}

  @Get()
  getHealth() {
    return { status: 'UP', timestamp: new Date().toISOString() };
  }
}
