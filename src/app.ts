import 'dotenv/config';

import express, { Application } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { listenFn } from '@core/controllers';
import { errorHandler, port } from '@core/utils';
import routes from '@core/routes';
import { logger } from '@core/tools';
import swaggerjsdoc from 'swagger-jsdoc';
import swaggerui from 'swagger-ui-express';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const server: Application = express();

server.use((req, res, next) => {
  logger.info(`${req.method}, ${req.url}`);

  next();
});

// Parse JSON bodies (as send by API clients) and add 1 kb limit to sending json.
server.use(express.json({ type: 'application/json', limit: '1kb' }));
// Use all routes.
server.use(routes);
// Parse URL-encoded bodies (as sent by HTML forms)
server.use(express.urlencoded({ extended: true }));
// Add security to the server.
server.use(helmet());
// Handle errors.
server.use(errorHandler);
// Add Morgan logging mode for receiving requests.
server.use(morgan('dev'));
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Arif Books Express API with Swagger',
      version: '0.1.0',
      description:
        'This is a simple Book API application made with Express and documented with Swagger',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'skills with arif',
        url: 'arif.com',
        email: 'info@email.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
  },
  apis: ['./routes/*.ts'],
};

const spec = swaggerjsdoc(options);

server.use('/api-docs', swaggerui.serve, swaggerui.setup(spec));

server.listen(port, listenFn);
