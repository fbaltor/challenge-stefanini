#!/bin/bash
set -e

echo "Logging the data:"
docker exec -i db bash < ./scripts/query.sh


