import { Response } from 'express';
import { users } from '@core/consts';
import { User } from '@core/types';
import { typedRequestBody } from '@core/types';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

/**
 * Add a user based on body request data.
 * @function addUser
 * @access Public
 * @route POST /users/add
 * @param { typedRequestBody<IUsers> } req
 * @param { Response } res
 * @returns { Response<any, Record<string, any>> }
 * @example addUser();
 */
const addUser = (
  req: typedRequestBody<User>,
  res: Response
): Response<any, Record<string, any>> => {
  const { name, age, work } = req.body;
  let id = Math.floor(Math.random() * 100);
  users.push({ id, name, age, work });
  return res.json(users);
};

export { addUser };
