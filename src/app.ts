import 'module-alias/register';
import 'dotenv/config';

import express, { Application } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { listenFn } from '@core/controllers';
import { errorHandler, port } from '@core/utils';
import routes from '@core/routes';
import { logger } from '@core/tools';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

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
      title: 'Users API',
      version: '0.1.0',
      description:
        'This is a simple Users API application made with Express and documented with Swagger',
      license: {
        name: 'MIT',
      },
      contact: {
        name: 'Fadi Hanna',
        email: 'fhanna181@gmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:5000/',
      },
    ],
  },
  apis: ['./routes/*.ts'],
};

const specs = swaggerJsdoc(options);
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
server.use(routes);

server.listen(port, listenFn);
