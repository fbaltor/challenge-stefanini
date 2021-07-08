# To run this script, execute "docker exec -i db-server bash < create-table.sh"

#!/bin/bash
set -e

echo "Logging the data:"
docker exec -i db bash < query.sh


