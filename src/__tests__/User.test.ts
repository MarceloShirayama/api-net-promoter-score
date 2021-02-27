/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import request from 'supertest';
import { getConnection } from 'typeorm';
import app from '../app';
import createConnection from '../database';

// eslint-disable-next-line no-undef
describe('Users', () => {
  // eslint-disable-next-line no-undef
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  // eslint-disable-next-line no-undef
  afterAll(async() => {
    const connection = getConnection();
    await connection.dropDatabase();
    await connection.close();
  });

  // eslint-disable-next-line no-undef
  it('Should be able to create a new user', async () => {
    const response = await request(app).post('/users')
      .send({
        email: 'user@example.com',
        name: 'User Example',
      });
    // eslint-disable-next-line no-undef
    expect(response.status).toBe(201);
  });

  // eslint-disable-next-line no-undef
  it('Should not be able to create a user with exists email', async () => {
    const response = await request(app).post('/users')
      .send({
        email: 'user@example.com',
        name: 'User Example',
      });
    // eslint-disable-next-line no-undef
    expect(response.status).toBe(400);
  });
});
