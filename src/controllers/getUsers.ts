import { users } from '../utils/consts';
import { User, typedRequestBody } from '../types';
import { Response } from 'express';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

/**
 * Get all users.
 * @function getUsers
 * @access Public
 * @route GET /users/
 * @param { typedRequestBody<User> } req
 * @param { Response } res
 * @returns { Response<any, Record<string, any>> }
 * @example getUsers();
 */
const getUsers = (
  req: typedRequestBody<User>,
  res: Response
): Response<any, Record<string, any>> => {
  return res.json(users);
};

export { getUsers };
