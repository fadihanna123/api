import 'dotenv/config';

import { listenFn } from '@core/controllers';
import routes from '@core/routes';
import { logger } from '@core/tools';
import {
  errorHandler,
  isCors,
  port,
  serverEnv,
  allowedDomains,
} from '@core/utils';
import express, { Request, Response, Application, json } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import cors, { CorsOptions } from 'cors';
import { rateLimit } from 'express-rate-limit';

/**
 * @author Fadi Hanna
 */

export const server: Application = express();

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (allowedDomains?.split(', ')?.indexOf(origin as string) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

const limiter = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100,
};

// Cors
if (isCors) {
  server.use(cors(corsOptions));
}

// Restrict counts of requests.
server.use(rateLimit(limiter));

// Add Morgan logging mode for receiving requests
server.use(morgan('dev'));
// Parse JSON
server.use(json({ type: 'application/json', limit: '1kb' }));

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
      },
    },
    version: '1.0.0',
    servers: [
      {
        url: 'http://localhost:5000/',
        description: 'Local server',
      },
    ],
  },
  apis: [`${__dirname}/routes/*.ts`],
};

const specs = swaggerJsdoc(options);
server.use(
  '/api-docs',
  swaggerUi.serve as any,
  swaggerUi.setup(specs, { explorer: true }) as any
);

// Parse URL-encoded bodies (as sent by HTML forms)
server.use(express.urlencoded({ extended: true }));
// Add security to the server
server.disable('x-powered-by');
server.use(helmet());
// Use all routes
server.use('/api/', routes);
// Add a 404 handler before the error handler
server.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Not Found' });
});

// Handle errors
server.use(errorHandler);

if (serverEnv !== 'test') {
  server.listen(port, listenFn);
}
