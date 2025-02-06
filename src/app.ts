import 'dotenv/config';

import { listenFn } from '@/controllers';
import routes from '@/routes/';
import { logger } from '@/tools';
import { errorHandler, port } from '@/utils';
import express, { Application, json } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

export const server: Application = express();

// Add Morgan logging mode for receiving requests.
server.use(morgan('dev'));
// Parse JSON.
server.use(json());
// Use all routes.
server.use(routes);

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Users API',
      version: '0.1.0',
      description:
        'This is a simple Users API application made with Express and documented with Swagger',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'Fadi Hanna',
        email: 'fhanna181@gmail.com',
      },
    },
    version: '1.0.0',
    servers: [
      {
        api: 'http://localhost:5000/',
        description: 'Local server',
      },
    ],
  },
  apis: [`${__dirname}/routes/*.ts`],
};

const specs = swaggerJsdoc(options);
server.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

server.use((req, res, next) => {
  logger.info(`${req.method}, ${req.url}`);

  next();
});

// Parse URL-encoded bodies (as sent by HTML forms)
server.use(express.urlencoded({ extended: true }));
// Add security to the server.
server.use(helmet());
// Handle errors.
server.use(errorHandler);

if (process.env.NODE_ENV !== 'test') {
  server.listen(port, listenFn);
}
