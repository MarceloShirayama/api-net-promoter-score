// eslint-disable-next-line import/no-unresolved,  import/extensions
import app from './app';

const PORT = 3333;
const HOST = '0.0.0.0';

// eslint-disable-next-line no-console
app.listen(PORT, HOST, () => console.log('Server is running!'));
