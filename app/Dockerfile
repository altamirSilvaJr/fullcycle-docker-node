FROM node:15

WORKDIR /usr/src/app

COPY . .

ENV DOCKERIZE_VERSION v0.7.0

# As linhas com o comando "apk" estavam apresentando erro durante o build
RUN wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin

RUN npm install express --save
RUN npm install mysql --save

EXPOSE 3000

CMD ["node", "index.js"]