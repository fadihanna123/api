import request from 'supertest';
import { expect, it } from 'vitest';
import { server } from '../app';

it('GET /api/users', async () => {
  const res = await request(server).get('/api/users');
  expect(res.statusCode).toBe(200);
});

