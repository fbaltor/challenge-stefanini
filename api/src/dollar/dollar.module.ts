import { Module } from '@nestjs/common';
import { DollarService } from './dollar.service';
import { DollarController } from './dollar.controller';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cotacao } from './cotacao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cotacao]), HttpModule],
  providers: [DollarService],
  controllers: [DollarController],
})
export class DollarModule {}
