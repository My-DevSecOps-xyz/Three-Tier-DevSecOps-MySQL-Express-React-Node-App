#!/bin/bash
set -e

until mysqladmin ping -h "mysql" -u "root" -p"My2ndStrongRootPassword!" --silent; do
  echo "Waiting for MySQL to be ready..."
  sleep 2
done

echo "MySQL is up and running!"
exec "$@"