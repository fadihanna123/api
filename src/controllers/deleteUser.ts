import { User, typedRequestBody } from '@/types';
import { users } from '@utils/consts';
import { Response } from 'express';

/**
 * @author Fadi Hanna
 */

/**
 * Delete a user based on id.
 * @function deleteUser
 * @access Public
 * @route DELETE /users/:id
 * @param { typedRequestBody<User> } req
 * @param { Response } res
 * @example deleteUser();
 */
const deleteUser = (req: typedRequestBody<User>, res: Response) => {
  const id = Number(req.params.id);
  const foundId = users.findIndex((user: User) => user.id === id);
  users.splice(foundId, 1);
  res.json(users);
};

export { deleteUser };
