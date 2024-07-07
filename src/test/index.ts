import { Router } from 'express';
import { getUsers, addUser, updateUser, deleteUser } from '@core/controllers';
import { Routes } from '@core/types';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const router: Router = Router();

router.get<Routes>('/test', (req, res) => {
  res.send('HEJ');
});

export default router;
