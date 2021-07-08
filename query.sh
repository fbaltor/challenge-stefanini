#!/bin/bash

set -e

psql --username "postgres" --dbname "dollar" <<-EOSQL
  SELECT * FROM public.cotacao;
EOSQL
