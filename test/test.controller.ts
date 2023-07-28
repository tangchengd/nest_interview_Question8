// test/test.controller.ts

import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { UtilsService } from '../utils/utils.service';

@Controller('api')
export class TestController {
  constructor(private readonly utilsService: UtilsService) {}

  @Post('test')
  @UsePipes(new ValidationPipe())
  test(@Body() body: { num: number }): { result: number } {
    const { num } = body;
    const result = this.utilsService.double(num);
    return { result };
  }
}
