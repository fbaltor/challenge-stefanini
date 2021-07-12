#!/bin/bash

set -e

# This file existence testing already change directory
if [ ! -d "../api/node_modules" ]; then
  cd api
  pwd
  npm install
  cd ..
fi

docker-compose -f docker-compose.yml up
