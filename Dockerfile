FROM node:24.11.1-alpine
WORKDIR /app
RUN npm install -g ts-node-dev yarn --force
COPY yarn.lock package.json ./
ENV DEV_PORT=5000
RUN yarn --immutable
COPY ./ ./
EXPOSE ${DEV_PORT}
CMD ["yarn", "dev"]
