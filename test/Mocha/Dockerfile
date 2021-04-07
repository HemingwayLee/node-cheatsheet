FROM node:12

RUN mkdir -p /home/app/
COPY . /home/app/
WORKDIR /home/app/

RUN npm install mocha
RUN node index.js
RUN npm test


