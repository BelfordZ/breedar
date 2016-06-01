# Pull base image.
FROM node:4.2.1

RUN apt-get update

RUN apt-get install -y build-essential
RUN apt-get install -y wget
RUN apt-get install -y ca-certificates

ADD package.json /app/package.json

RUN cd /app && npm install
ADD . /app

WORKDIR /app

EXPOSE 10000

CMD node server.js
