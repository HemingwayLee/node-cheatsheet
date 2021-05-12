FROM node:12

RUN apt-get update && apt-get install -y \
  tree \
  net-tools

RUN mkdir -p /home/app/
COPY . /home/app/
WORKDIR /home/app/
RUN npm install
RUN npm run babel
RUN tree .

ENTRYPOINT npm start && /bin/bash

