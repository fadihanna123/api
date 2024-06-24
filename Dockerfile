FROM node:20.14.0-alpine3.20
WORKDIR /app
RUN npm i --ignore-scripts -g nodemon ts-node-dev rimraf
COPY yarn.lock package.json .
RUN yarn install --frozen-lockfile --ignore-scripts
COPY . .
EXPOSE ${DEV_PORT}
CMD yarn dev
