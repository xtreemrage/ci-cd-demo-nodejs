FROM node:alpine

RUN addgroup -S app && adduser -S -G app app

ENV HOME=/home/app

COPY package.json $HOME/cicd/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/cicd

RUN npm config set save-exact true && npm install && npm cache clean --force