FROM node:latest

WORKDIR /app

COPY . .

RUN yarn

CMD ["sh", "-c", "yarn migrate:up ; yarn dev"]
