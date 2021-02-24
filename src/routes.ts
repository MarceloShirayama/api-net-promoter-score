import { Router } from 'express';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { UserController } from './controllers/UserController';

const router = Router();

const UserControll = new UserController();

router.post('/users', UserControll.create);

// eslint-disable-next-line import/prefer-default-export
// export { router };
export default router;
