import request from 'supertest';
import { expect, it } from 'vitest';
import { server } from '../app';

it('Delete User /api/users/:id', async () => {
  const res = await request(server).delete('/api/users/1');
  expect(res.statusCode).toBe(200);
});

