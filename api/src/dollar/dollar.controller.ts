import { Controller, Post, Query } from '@nestjs/common';
import { DollarService } from './dollar.service';

@Controller('dollar')
export class DollarController {
  constructor(private dollarService: DollarService) {}

  @Post('')
  getCotacao(@Query('dataCotacao') date) {
    return this.dollarService.saveCotacao(date);
  }
}
