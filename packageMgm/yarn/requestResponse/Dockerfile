FROM node:12
# yarn is already installed in node:12

RUN mkdir -p /home/app/
COPY . /home/app/
WORKDIR /home/app/


RUN yarn
RUN node index.js

RUN ls
# yarn.lock will be created

