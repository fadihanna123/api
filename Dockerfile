FROM node:22.14.0-alpine3.20
WORKDIR /app
RUN npm i --silent --ignore-scripts -g ts-node-dev
COPY yarn.lock package.json ./
ENV DEV_PORT=5000
RUN npm ci
COPY . .
EXPOSE ${DEV_PORT}
CMD ["yarn", "dev"]
