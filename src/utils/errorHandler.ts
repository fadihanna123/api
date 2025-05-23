// @ts-check
import { logger } from '@/tools';

/**
 * @author Fadi Hanna
 */

/**
 * Handle server errors.
 * @function errorHandler
 * @param { Error }  error
 * @returns { void }
 * @example errorHandler({ message: "ERROR" });
 */
export const errorHandler = (error: Error): void => {
  if (error) {
    logger.error({ error: JSON.stringify(error.message) });
  }
};
