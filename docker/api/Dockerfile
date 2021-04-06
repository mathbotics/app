FROM node:13

WORKDIR /app

COPY . .

RUN yarn

CMD ["sh", "-c", "yarn migrate:up ; yarn adminseed ; yarn dev"]
