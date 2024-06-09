import { User } from '@core/types';
import { users } from '@core/consts';
import { Request, Response } from 'express';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const deleteUser = (req: Request, res: Response) => {
  const id = Number(req.params.id);

  let foundUser = users.find((user: User) => user.id === id);
  delete foundUser;
  return res.json(users);
};

export { deleteUser };
