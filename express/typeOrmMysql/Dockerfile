FROM node:12

RUN apt-get update && apt-get install -y net-tools curl

RUN mkdir -p /home/app/
COPY . /home/app/
WORKDIR /home/app/

RUN npm install -g nodemon
RUN npm install .
RUN npm ls

CMD npm start && /bin/bash

