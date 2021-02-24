import 'reflect-metadata';
import express from 'express';
// eslint-disable-next-line import/no-unresolved,  import/extensions
import createConnection from './database';
// eslint-disable-next-line import/no-unresolved, import/extensions
// import { router } from './routes';
// eslint-disable-next-line import/no-unresolved, import/extensions
import router from './routes';

createConnection();

const app = express();

app.use(express.json());

app.use(router);

export default app;
