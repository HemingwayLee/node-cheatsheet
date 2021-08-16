#!/bin/bash

while ! curl -o - ${DB_HOST}:${DB_PORT}; do 
  echo "mysql is not available, sleep..."
  sleep 5; 
done

echo "mysql is up !!"

pwd
ls

npm start

