// @ts-check
import { logger } from '@core/tools';
import { Request, Response, NextFunction } from 'express';

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
export const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  const status: number = err.status || 500;
  const message: string = err.message || 'Internal Server Error';
  logger.error({ status, message, stack: err.stack });
  res.status(status).json({ error: message });
};
