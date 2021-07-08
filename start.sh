#!/bin/bash

set -e

if [ ! -d "./api/node_modules" ]; then
  cd api
  npm install
  cd ../..
fi

docker-compose -f docker-compose.yml up
until [ "`/usr/bin/docker inspect -f {{.State.Running}} db-server`"=="true" ]; do
    sleep 0.1;
done;
echo "All services running!"

