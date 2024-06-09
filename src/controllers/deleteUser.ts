import { User } from '@core/types';
import { users } from '@core/consts';
import { Request, Response } from 'express';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const deleteUser = (req: Request, res: Response) => {
  const id = Number(req.params.id);

  let foundId = users.findIndex((user: User) => user.id === id);
  users.splice(foundId, 1);
  return res.json(users);
};

export { deleteUser };
