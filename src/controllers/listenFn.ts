import { logger } from '@/tools';
import { Logger } from 'winston';
import { port } from '../utils';

/**
 * @author Fadi Hanna
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
