import { Router } from 'express';
import { getUsers, addUser, updateUser, deleteUser } from '@core/controllers';
import { Routes } from '@core/types';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const router: Router = Router();

router.get<Routes>('/users', getUsers);
router.post<Routes>('/users/add', addUser);
router.put<Routes>('/users/:id', updateUser);
router.delete<Routes>('/users/:id', deleteUser);

export default router;
