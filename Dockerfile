FROM node:20.15.0-alpine3.20
WORKDIR /app
Run chown -R node:node /app
RUN npm i --ignore-scripts -g nodemon ts-node-dev rimraf
COPY yarn.lock package.json .
RUN yarn install --silent --frozen-lockfile --ignore-scripts
COPY . .
EXPOSE ${DEV_PORT}
USER node
CMD yarn dev
