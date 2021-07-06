import { Module } from '@nestjs/common';
import { DollarService } from './dollar.service';
import { DollarController } from './dollar.controller';

@Module({
  providers: [DollarService],
  controllers: [DollarController]
})
export class DollarModule {}
