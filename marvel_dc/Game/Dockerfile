FROM node:alpine

WORKDIR /usr/src/app

COPY package.json .

RUN yarn

COPY . .

EXPOSE 6666

CMD ["yarn", "run", "docker"]