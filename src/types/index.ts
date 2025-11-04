import { Request } from 'express';

/**
 * @author Fadi Hanna
 */

declare global {
  type Routes = '/users' | '/users/add' | '/users/:id';
  namespace NodeJS {
    /**
     * ProcessEnv
     * @param { number } PORT
     * @param { 'development' | 'production' | 'test' } NODE_ENV
     */
    interface ProcessEnv {
      DEV_PORT: number;
      PROD_PORT: number;
      USE_CORS: string;
      ALLOWED_DOMAINS: string[];
      NODE_ENV: 'development' | 'production' | 'test';
    }
  }
}

interface User {
  id?: number;
  name: string;
  age: number;
  work: string;
}

interface typedRequestBody<T> extends Request {
  body: T;
}

export { User, typedRequestBody, Routes };
