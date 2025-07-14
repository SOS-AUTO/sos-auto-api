import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { ApiExcludeController } from '@nestjs/swagger';
@ApiExcludeController()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getInfo(@Req() req: Request) {
    return this.appService.getApiInfo(req);
  }
}
