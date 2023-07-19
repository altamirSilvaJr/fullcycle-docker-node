FROM node:18

ENV DOCKERIZE_VERSION v0.7.0

RUN wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 3000

# CMD ["node", "index.js"]