import { logger } from '@core/tools';
import { port } from '@core/utils';
import { Logger } from 'winston';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

/**
 * Listen to the server.
 * @function listenFn
 * @access Public
 * @returns { Logger }
 * @example listenFn();
 */
const listenFn = (): Logger => logger.info(`Server is running on port ${port}`);

export { listenFn };
