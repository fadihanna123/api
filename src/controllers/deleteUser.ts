import { Response } from 'express';
import { User, typedRequestBody } from '../types';
import { users } from '../utils/consts';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

/**
 * Delete a user based on id.
 * @function deleteUser
 * @access Public
 * @route DELETE /users/:id
 * @param { typedRequestBody<User> } req
 * @param { Response } res
 * @returns { Response<any, Record<string, any>> }
 * @example deleteUser();
 */
const deleteUser = (
  req: typedRequestBody<User>,
  res: Response
): Response<any, Record<string, any>> => {
  const id = Number(req.params.id);

  let foundId = users.findIndex((user: User) => user.id === id);
  users.splice(foundId, 1);
  return res.json(users);
};

export { deleteUser };
