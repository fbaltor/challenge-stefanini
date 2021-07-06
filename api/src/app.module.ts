import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DollarModule } from './dollar/dollar.module';

@Module({
  imports: [DollarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
