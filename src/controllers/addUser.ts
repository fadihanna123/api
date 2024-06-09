import { Request, Response } from 'express';
import { users } from '@core/consts';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const addUser = (req: Request, res: Response) => {
  const { name, age, work } = req.body;
  let id = Math.floor(Math.random() * 100);
  users.push({ id, name, age, work });
  return res.json(users);
};

export { addUser };
