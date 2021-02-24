import request from 'supertest';
// eslint-disable-next-line import/no-unresolved,  import/extensions
import app from '../app';
// eslint-disable-next-line import/no-unresolved,  import/extensions
import createConnection from '../database';

// eslint-disable-next-line no-undef
describe('Surveys', () => {
  // eslint-disable-next-line no-undef
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  // eslint-disable-next-line no-undef
  it('Should be able to create a new survey', async () => {
    const response = await request(app).post('/surveys')
      .send({
        title: 'Title example',
        description: 'Description Example',
      });
    // eslint-disable-next-line no-undef
    expect(response.status).toBe(201);
    // eslint-disable-next-line no-undef
    expect(response.body).toHaveProperty('id');
  });

  // eslint-disable-next-line no-undef
  it('Should be able to get all surveys', async () => {
    await request(app).post('/surveys')
      .send({
        title: 'Title example 2',
        description: 'Description Example 2',
      });
    const response = await request(app).get('/surveys');
    // eslint-disable-next-line no-undef
    expect(response.body.length).toBe(2);
  });
});

// BUG: Está dando erro nesse teste quando é executado pela segunda vez consecutiva.
// Expected: 201 Received: 400
