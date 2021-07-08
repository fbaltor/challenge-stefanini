import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DollarModule } from './dollar/dollar.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      synchronize: false,
      entities: [join(__dirname, '.', '**', '*.entity{.ts,.js}')],
      retryAttempts: 5,
      retryDelay: 1000,
      keepConnectionAlive: true,
    }),
    DollarModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
