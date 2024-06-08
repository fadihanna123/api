import { users } from 'consts';
import { Request, Response } from 'express';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const updateUser = (req: Request, res: Response) => {
  const { name, age, work } = req.body;
  const id = Number(req.params.id);

  let foundUser = users.find((user) => user.id === id);
  foundUser = { name, age, work };
  return res.json(users);
};

export { updateUser };
