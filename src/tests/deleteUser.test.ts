import { server } from '../app';
import request from 'supertest';
import { expect, it } from 'vitest';

it('Delete User /users/:id', async () => {
  const res = await request(server).delete('/users/1');
  expect(res.statusCode).toBe(200);
});
