// eslint-disable-next-line import/no-unresolved,  import/extensions
import app from './app';

// eslint-disable-next-line radix
const PORT = parseInt(process.env.PORT);
const { HOST } = process.env;

// eslint-disable-next-line no-console
app.listen(PORT, HOST, () => console.log('Server is running!'));
