import { users } from '@core/consts';
import { Request, Response } from 'express';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const updateUser = (req: Request, res: Response) => {
  const { name, age, work } = req.body;
  console.log(req.body);
  const id = Number(req.params.id);

  let foundUser: number = users.findIndex((user) => user.id === id);
  users[foundUser] = { id: id, name, age, work };
  return res.json(users);
};

export { updateUser };
