FROM node:alpine

WORKDIR /usr/src/app

COPY package.json .

RUN yarn

COPY . .

EXPOSE 5002

CMD ["yarn", "run", "docker"]