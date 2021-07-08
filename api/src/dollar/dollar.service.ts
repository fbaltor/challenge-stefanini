import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class DollarService {
  constructor(private httpService: HttpService) {}

  getCotacao(date) {
    return this.httpService
      .get(
        `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=${date}&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`,
      )
      .pipe(
        map((res) => {
          console.log(res.data);
          return res.data.value;
        }),
      );
  }
}
