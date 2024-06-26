FROM node:20.15.0-alpine3.20
RUN adduser -D -g '' fadi
WORKDIR /app
RUN npm i --ignore-scripts -g nodemon ts-node-dev rimraf
COPY yarn.lock package.json .
RUN yarn install --frozen-lockfile --ignore-scripts
COPY . .
USER fadi
EXPOSE ${DEV_PORT}
CMD yarn dev
