FROM node:14

RUN mkdir -p /home/app/
COPY . /home/app/
WORKDIR /home/app/
RUN npm install
RUN npm ls
RUN node index.js

ENTRYPOINT /bin/bash



