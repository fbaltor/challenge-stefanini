import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cotacao } from './cotacao.entity';

@Injectable()
export class DollarService {
  constructor(
    private httpService: HttpService,
    @InjectRepository(Cotacao)
    private cotacaoRepository: Repository<Cotacao>,
  ) {}

  saveCotacao(date: Date) {
    const cotacaoInfo = this.httpService
      .get(
        `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=${date}&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`,
      )
      .pipe(
        map((res) => {
          const cotacaoInfo = res.data.value[0];

          const now = new Date();

          const cotacaoEntry = this.cotacaoRepository.create();
          cotacaoEntry.timestamp = now.toString();
          cotacaoEntry.priceDate = String(date);
          cotacaoEntry.priceDateTime = cotacaoInfo.dataHoraCotacao;
          cotacaoEntry.buyPrice = cotacaoInfo.cotacaoCompra;
          cotacaoEntry.sellPrice = cotacaoInfo.cotacaoVenda;

          return this.cotacaoRepository.save(cotacaoEntry);
        }),
      );

    return cotacaoInfo;
  }
}
