FROM node:20.14.0-alpine3.20
WORKDIR /app
RUN npm i --ignore-scripts -g ts-node-dev rimraf
COPY package.json .
RUN yarn --ignore-scripts
COPY . .
EXPOSE $PORT
CMD yarn dev
