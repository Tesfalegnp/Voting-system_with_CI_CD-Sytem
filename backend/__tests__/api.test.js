const request = require('supertest');
const app = require('../index').app; // Make sure your Express app is exported

test('GET / returns status 200', async () => {
  const response = await request(app).get('/');
  expect(response.status).toBe(200);
});