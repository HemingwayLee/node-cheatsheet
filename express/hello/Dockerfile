FROM node:12

RUN apt-get update && apt-get install -y net-tools

RUN mkdir -p /home/app/
COPY . /home/app/
WORKDIR /home/app/

RUN npm install .

ENTRYPOINT npm start && /bin/bash

