import { User, typedRequestBody } from '@/types';
import { users } from '@utils/consts';
import { Response } from 'express';

/**
 * @author Fadi Hanna
 */

/**
 * Update a user based on id.
 * @function updateUser
 * @access Public
 * @route PUT /users/:id
 * @param { typedRequestBody<User> } req
 * @param { Response } res
 * @example updateUser();
 */
const updateUser = (req: typedRequestBody<User>, res: Response) => {
  const { name, age, work } = req.body;
  console.log(req.body);
  const id = Number(req.params.id);

  const foundUser: number = users.findIndex((user) => user.id === id);
  users[foundUser] = { id: id, name, age, work };
  return res.json(users);
};

export { updateUser };
