import { users } from '@core/consts';
import { Request, Response } from 'express';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const addUser = (req: Request, res: Response) => {
  const { name, age, work } = req.body;
  users.push({ name, age, work });
  return res.json(users);
};

export { addUser };
