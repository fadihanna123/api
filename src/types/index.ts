import { Request } from 'express';

/**
 * @author Fadi Hanna
 */

type Routes = '/users' | '/users/add' | '/users/:id';

namespace NodeJS {
  /**
   * ProcessEnv
   * @param { number } PORT
   * @param { 'development' | 'production' | 'test' } NODE_ENV
   */
  interface ProcessEnv {
    PORT: number;
    NODE_ENV: 'development' | 'production' | 'test';
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
