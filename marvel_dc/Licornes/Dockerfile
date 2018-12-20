FROM node:alpine

WORKDIR /usr/src/app

COPY package.json .

RUN yarn

COPY . .

EXPOSE 6001

CMD ["yarn", "run", "docker"]