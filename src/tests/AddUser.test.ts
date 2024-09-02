import { server } from '../app';
import request from 'supertest';
import { expect, it } from 'vitest';

it('Add User /users/add', async () => {
  const res = await request(server).post('/users/add').send({
    name: 'Erik',
    age: 31,
    work: 'Developer',
  });
  expect(res.statusCode).toBe(200);
});
