FROM node:20.18.0-alpine3.20
WORKDIR /app
RUN npm i --silent --ignore-scripts -g ts-node-dev
COPY yarn.lock package.json ./
RUN yarn install --silent --ignore-scripts --immutable
COPY . .
EXPOSE ${DEV_PORT}
CMD ["yarn", "dev"]
