import { Router } from 'express';
// eslint-disable-next-line import/no-unresolved, import/extensions
import SurveyController from './controllers/SurveyController';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { UserController } from './controllers/UserController';

const router = Router();

const userController = new UserController();
const surveysController = new SurveyController();

router.post('/users', userController.create);
router.post('/surveys', surveysController.create);
router.get('/surveys', surveysController.show);

// eslint-disable-next-line import/prefer-default-export
// export { router };
export default router;
