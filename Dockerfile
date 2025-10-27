FROM node:22.20-alpine
WORKDIR /app
RUN apk add --no-cache yarn
RUN npm i --silent --ignore-scripts -g ts-node-dev yarn
COPY yarn.lock package.json ./
ENV DEV_PORT=5000
RUN yarn setup
COPY ./ ./
EXPOSE ${DEV_PORT}
CMD ["yarn", "dev"]
