FROM ghcr.io/puppeteer/puppeteer:19.6.2

USER root

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g .

ENV RUNNING_IN_DOCKER=true

ENTRYPOINT [ "dev-cli" ]