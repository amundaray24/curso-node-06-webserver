FROM node:18.13.0

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

RUN echo "PORT=80" > .env

CMD [ "npm", "start"]