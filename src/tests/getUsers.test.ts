import request from 'supertest';
import { expect, it } from 'vitest';
import { server } from '../app';

it('GET /users', async () => {
  const res = await request(server).get('/users');
  expect(res.statusCode).toBe(200);
});
