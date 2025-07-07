#!/bin/bash
set -e


until mysqladmin ping -h "mysql" -u "root" -p"My2ndStrongRootPassword!" --silent; do
  echo "Waiting for MySQL to be ready..."
  sleep 2
done

echo "MySQL is up and running!"
exec "$@"




# #!/bin/sh

# # Wait until MySQL is ready
# until mysqladmin ping -h "$DB_HOST" -u "$DB_USER" -p"$DB_PASSWORD" --silent; do
#   echo "Waiting for MySQL..."
#   sleep 2
# done

# echo "MySQL is ready. Starting backend..."

# # Execute the Node.js app
# exec node app.js









# until mysqladmin ping -h "mysql" -u "root" -p"My2ndStrongRootPassword!" --silent; do
#   echo "Waiting for MySQL to be ready..."
#   sleep 2
# done

# echo "MySQL is up and running!"
# exec "$@"