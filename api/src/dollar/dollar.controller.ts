import { Controller, Get, Query } from '@nestjs/common';
import { DollarService } from './dollar.service';

@Controller('dollar')
export class DollarController {
  constructor(private dollarService: DollarService) {}

  @Get('')
  async getCotacao(@Query('dataCotacao') date) {
    return this.dollarService.getCotacao(date);
  }
}
