FROM node:14-alpine

RUN apk add yarn && mkdir -p /usr/src/api

WORKDIR /usr/src/app

RUN yarn

EXPOSE 3000

CMD ["yarn", "dev"]