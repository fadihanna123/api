import { User, typedRequestBody } from '@core/types';
import { users } from '@utils/consts';
import { Response } from 'express';

/**
 * @author Fadi Hanna
 */

/**
 * Get all users.
 * @function getUsers
 * @access Public
 * @route GET /users/
 * @param { typedRequestBody<User> } req
 * @param { Response } res
 * @example getUsers();
 */
const getUsers = (req: typedRequestBody<User>, res: Response) => {
  res.status(200).json(users);
};

export { getUsers };
