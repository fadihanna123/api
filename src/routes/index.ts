import { addUser, deleteUser, getUsers, updateUser } from '@/controllers';
import { Routes } from '@/types';
import { Router } from 'express';

/**
 * @author Fadi Hanna
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - age
 *         - work
 *       properties:
 *         id:
 *           type: number
 *           description: The id of the user
 *         name:
 *           type: string
 *           description: The name of the user
 *         age:
 *           type: number
 *           description: The age of the user
 *         work:
 *           type: string
 *           description: The work of the user
 *
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Users API
 * /users:
 *   get:
 *     summary: Lists all the users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of the users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Users'
 *
 * /users/add:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       200:
 *         description: The created user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       500:
 *         description: Some server error
 * /users/{id}:
 *   put:
 *    summary: Update the user by the id
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The user id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Users'
 *    responses:
 *      200:
 *        description: The user was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Users'
 *      404:
 *        description: The user was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *
 *     responses:
 *       200:
 *         description: The user was deleted
 *       404:
 *         description: The user was not found
 */

const router: Router = Router();

router.get<Routes>('/users', getUsers);
router.post<Routes>('/users/add', addUser);
router.put<Routes>('/users/:id', updateUser);
router.delete<Routes>('/users/:id', deleteUser);

export default router;
