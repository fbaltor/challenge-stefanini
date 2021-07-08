import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity('cotacao')
export class Cotacao {
  @PrimaryColumn()
  id: string;

  @Column({ name: 'time_request', type: 'timestamp' })
  timestamp: string;

  @Column({ name: 'date_price' })
  priceDate: string;

  @Column({ name: 'date_time_price' })
  priceDateTime: string;

  @Column({ name: 'buy_price' })
  buyPrice: string;

  @Column({ name: 'sell_price' })
  sellPrice: string;
}
