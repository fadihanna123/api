import { typedRequestBody, User } from '@/types';
import { users } from '@utils/consts';
import { Response } from 'express';

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
 * @example addUser();
 */
const addUser = (req: typedRequestBody<User>, res: Response) => {
  const { name, age, work } = req.body;
  const id = Math.floor(Math.random() * 100);
  users.push({ id, name, age, work });
  return res.json(users);
};

export { addUser };
