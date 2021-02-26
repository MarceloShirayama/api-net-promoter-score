import { Router } from 'express';
import SendMailController from './controllers/SendMailController';
// eslint-disable-next-line import/no-unresolved, import/extensions
import SurveyController from './controllers/SurveyController';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { UserController } from './controllers/UserController';

const router = Router();

const userController = new UserController();
const surveysController = new SurveyController();
const sendMailController = new SendMailController();

router.post('/users', userController.create);
router.get('/users', userController.show);

router.post('/surveys', surveysController.create);
router.get('/surveys', surveysController.show);

router.post('/sendMail', sendMailController.execute);

// eslint-disable-next-line import/prefer-default-export
// export { router };
export default router;
