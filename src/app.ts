import express, { Application } from 'express';
import { listenFn } from '@core/controllers';
import { errorHandler, port, storeLog } from '@core/utils/';
import morgan from 'morgan';
import routes from '@core/routes';
import { logger } from '@core/tools';
import helmet from 'helmet';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const server: Application = express();

server.use((req, res, next) => {
  logger.info(`${req.method}, ${req.url}`);

  storeLog(`Method: ${req.method}, ${req.url}}`, req.method, req.url);

  next();
});

// Parse JSON bodies (as send by API clients) and add 1 kb limit to sending json.
server.use(express.json({ type: 'application/json', limit: '1kb' }));
// Parse URL-encoded bodies (as sent by HTML forms)
server.use(express.urlencoded({ extended: true }));
// Add security to the server.
server.use(helmet());
// Handle if someone access unknown or not found route.
server.use((_, res) => res.send('This route does not exist!'));
// Handle errors.
server.use(errorHandler);
// Add Morgan logging mode for receiving requests.
server.use(morgan('dev'));
// Use all routes.
server.use(routes);

server.listen(port, listenFn);
