import 'reflect-metadata';
import express from 'express';
// eslint-disable-next-line import/no-unresolved,  import/extensions
import './database';
// eslint-disable-next-line import/no-unresolved, import/extensions
// import { router } from './routes';
// eslint-disable-next-line import/no-unresolved, import/extensions
import router from './routes';

const app = express();
const PORT = 3333;
const HOST = '0.0.0.0';

app.use(express.json());

app.use(router);

// eslint-disable-next-line no-console
app.listen(PORT, HOST, () => console.log('Server is running!'));
