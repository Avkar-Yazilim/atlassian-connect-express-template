FROM node:18

RUN mkdir -p /usr/src/backend/public/js

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "build"]
