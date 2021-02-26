/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import SendMailController from './controllers/SendMailController';
import SurveyController from './controllers/SurveyController';
import UserController from './controllers/UserController';
import AnswerController from './controllers/AnswerController';

const router = Router();

const userController = new UserController();
const surveysController = new SurveyController();
const sendMailController = new SendMailController();
const answerController = new AnswerController();

router.post('/users', userController.create);
router.get('/users', userController.show);

router.post('/surveys', surveysController.create);
router.get('/surveys', surveysController.show);

router.post('/sendMail', sendMailController.execute);
router.get('/sendMail', sendMailController.show);

router.get('/answers/:value', answerController.execute);

// eslint-disable-next-line import/prefer-default-export
// export { router };
export default router;
