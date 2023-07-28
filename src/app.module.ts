import { Module } from '@nestjs/common';
import { UtilsService } from '../utils/utils.service';
import { TestController } from '../test/test.controller';

import { AppController } from './app.controller';
import { AppService } from './app.service';

// src/app.module.ts

@Module({
  imports: [],
  controllers: [TestController],
  providers: [UtilsService],
})
export class AppModule {}

