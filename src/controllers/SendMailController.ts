/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { resolve } from 'path';
import SurveysRepository from '../repositories/SurveysRepository';
import UsersRepository from '../repositories/UsersRepository';
import SurveysUsersRepository from '../repositories/SurveysUsersRepository';
import SendMailServices from '../services/SendMailServices';

class SendMailController {
  // eslint-disable-next-line class-methods-use-this
  async execute(request: Request, response: Response) {
    // eslint-disable-next-line camelcase
    const { email, survey_id } = request.body;
    const usersRepository = getCustomRepository(UsersRepository);
    const surveysRepository = getCustomRepository(SurveysRepository);
    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

    const user = await usersRepository.findOne({ email });
    if (!user) {
      return response.status(400).json({
        error: 'User does not exists',
      });
    }

    const survey = await surveysRepository.findOne({ id: survey_id });
    if (!survey) {
      return response.status(400).json({
        error: 'Survey does not exists',
      });
    }

    const surveyUserAlreadyExists = await surveysUsersRepository.findOne({
      where: [{ user_id: user.id }, { value: null }],
      relations: ['user', 'survey'],
    });

    const npsPath = resolve(__dirname, '..', 'views', 'emails', 'npsMail.hbs');
    const variables = {
      name: user.name,
      title: survey.title,
      description: survey.description,
      user_id: user.id,
      link: process.env.URL_MAIL,
    };

    if (surveyUserAlreadyExists) {
      await SendMailServices.execute(email, survey.title, variables, npsPath);
      return response.json(surveyUserAlreadyExists);
    }

    // Salvar as informações na tabela surveys_users.
    const surveyUser = surveysUsersRepository.create({
      user_id: user.id,
      survey_id,
    });

    await surveysUsersRepository.save(surveyUser);

    // Enviar email para o usuário.
    await SendMailServices.execute(email, survey.title, variables, npsPath);

    return response.json(surveyUser);
  }

  // eslint-disable-next-line class-methods-use-this
  async show(request: Request, response: Response) {
    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);
    const all = await surveysUsersRepository.find();
    return response.json(all);
  }
}

export default SendMailController;
