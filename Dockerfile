FROM node:alpine

WORKDIR /usr/app

COPY ./package*.json ./

RUN yarn install --production

COPY ./ ./

RUN yarn build

EXPOSE 3000

USER node

CMD [ "yarn", "start" ]