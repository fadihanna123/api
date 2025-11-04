import { typedRequestBody, User } from '@core/types';
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

  if (!addData.name || typeof addData.age !== 'number' || !addData.work) {
    res.status(400).json({ error: 'Invalid payload' });
  }

  const user = { id: Math.floor(Math.random() * 100), ...addData };
  users.push(user);
  res.status(201).json(users);
};

export { addUser };
