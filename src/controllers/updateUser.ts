import { User, typedRequestBody } from '@/types';
import { users } from '@utils/consts';
import { Response } from 'express';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

/**
 * Update a user based on id.
 * @function updateUser
 * @access Public
 * @route PUT /users/:id
 * @param { typedRequestBody<User> } req
 * @param { Response } res
 * @returns { Response<any, Record<string, any>> }
 * @example updateUser();
 */
const updateUser = (
  req: typedRequestBody<User>,
  res: Response
): Response<any, Record<string, any>> => {
  const { name, age, work } = req.body;
  console.log(req.body);
  const id = Number(req.params.id);

  let foundUser: number = users.findIndex((user) => user.id === id);
  users[foundUser] = { id: id, name, age, work };
  return res.json(users);
};

export { updateUser };
