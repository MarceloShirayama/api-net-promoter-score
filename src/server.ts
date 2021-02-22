import express from 'express';

const app = express();
const PORT: number = 3333;
const HOST: string = '0.0.0.0';

// eslint-disable-next-line no-console
app.listen(PORT, HOST, () => console.log('Server is running!'));
