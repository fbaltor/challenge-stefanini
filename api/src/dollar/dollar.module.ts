import { Module } from '@nestjs/common';
import { DollarService } from './dollar.service';
import { DollarController } from './dollar.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [DollarService],
  controllers: [DollarController],
})
export class DollarModule {}
