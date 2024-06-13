import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class AppController {
  constructor() {}

  @Get()
  getHealth(): string {
    return 'I am healthy!';
  }
}
