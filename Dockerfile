FROM node:22.11.0-alpine
WORKDIR /app
RUN npm i --silent --ignore-scripts -g ts-node-dev yarn
COPY yarn.lock package.json ./
ENV DEV_PORT=5000
RUN npm run setup
COPY ./ ./
EXPOSE ${DEV_PORT}
CMD ["yarn", "dev"]
