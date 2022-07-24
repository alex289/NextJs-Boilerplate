FROM node:alpine

WORKDIR /usr/app

COPY ./package*.json ./

RUN npm i pnpm -g
RUN pnpm i --frozen-lockfile

COPY ./ ./

RUN pnpm build

EXPOSE 3000

USER node

CMD [ "pnpm", "start" ]