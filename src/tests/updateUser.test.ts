import { server } from '../app';
import request from 'supertest';
import { expect, it } from 'vitest';

it('Update User /users/:id', async () => {
  const res = await request(server).put('/users/1').send({
    name: 'Anders',
    age: 32,
    work: 'Developer',
  });
  expect(res.statusCode).toBe(200);
});
