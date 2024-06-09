import { users } from '@core/consts';
import { Request, Response } from 'express';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const getUsers = (req: Request, res: Response) => {
  return res.json(users);
};

export { getUsers };
