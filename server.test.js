const request = require('supertest');
const app = require('./server');

test('GET / returns 200', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
});

test('GET /api returns ok', async () => {
  const res = await request(app).get('/api');
  expect(res.statusCode).toBe(200);
  expect(res.body.status).toBe('ok');
});

test('GET /health returns healthy', async () => {
  const res = await request(app).get('/health');
  expect(res.statusCode).toBe(200);
  expect(res.body.status).toBe('healthy');
  expect(res.body).toHaveProperty('uptime');
  expect(res.body).toHaveProperty('timestamp');
  expect(res.body).toHaveProperty('environment');
});