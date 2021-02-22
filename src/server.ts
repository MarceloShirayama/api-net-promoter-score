import express from 'express';

const app = express();
const PORT: number = 3333;
const HOST: string = '0.0.0.0';

// app.get('/users', (request, response) => response.send('Hello World - NLW04'));
app.get('/', (request, response) => response.json({ message: 'Hello World - NLW04' }));

app.post('/', (request, response) => response.json({ message: 'Os dados foram salvos com sucesso' }));

// eslint-disable-next-line no-console
app.listen(PORT, HOST, () => console.log('Server is running!'));
