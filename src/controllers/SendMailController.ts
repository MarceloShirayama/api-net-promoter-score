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

    const npsPath = resolve(__dirname, '..', 'views', 'emails', 'npsMail.hbs');

    const surveyUserAlreadyExists = await surveysUsersRepository.findOne({
      // where: [{ user_id: user.id }, { value: null }], // condição or
      where: [{ user_id: user.id, value: null }], // condição and
      relations: ['user', 'survey'],
    });

    const variables = {
      name: user.name,
      title: survey.title,
      description: survey.description,
      // user_id: user.id,
      id: '',
      link: process.env.URL_MAIL,
    };

    if (surveyUserAlreadyExists) {
      variables.id = surveyUserAlreadyExists.id; // se existir surveyUser id surveyUser existente
      await SendMailServices.execute(email, survey.title, variables, npsPath);
      return response.json(surveyUserAlreadyExists);
    }

    const surveyUser = surveysUsersRepository.create({
      user_id: user.id,
      survey_id,
    });

    // Salvar as informações na tabela surveys_users.
    await surveysUsersRepository.save(surveyUser);

    variables.id = surveyUser.id; // se não existir surveyUser id surveyUser criado

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
