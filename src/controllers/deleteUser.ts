import { User, typedRequestBody } from '@core/types';
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

  if (foundId === -1) res.status(404).json({ error: 'User not found' });

  users.splice(foundId, 1);
  res.status(200).json(users);
};

export { deleteUser };
