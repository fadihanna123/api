import request from 'supertest';
import { expect, it } from 'vitest';
import { server } from '../app';

it('Update User /api/users/:id', async () => {
  const res = await request(server).put('/api/users/1').send({
    name: 'Anders',
    age: 33,
    work: 'Developer',
  });

  expect(res.statusCode).toBe(200);
});
