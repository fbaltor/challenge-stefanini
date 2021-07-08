CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE cotacao (
  id uuid DEFAULT uuid_generate_v4 (),
  time_request VARCHAR NOT NULL,
  date_price VARCHAR NOT NULL,
  date_time_price VARCHAR NOT NULL,
  buy_price VARCHAR NOT NULL,
  sell_price VARCHAR NOT NULL,
  PRIMARY KEY (id)
);
