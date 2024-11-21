import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Test get req' })
  @ApiResponse({
    status: 200,
    description: 'List of all food packs',
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
