import { typedRequestBody, User } from '@/types';
import { users } from '@utils/consts';
import { Response } from 'express';

/**
 * @author Fadi Hanna
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
  const { ...addData } = req.body;

  const id = Math.floor(Math.random() * 100);
  users.push({ id, ...addData });
  res.json(users);
};

export { addUser };
