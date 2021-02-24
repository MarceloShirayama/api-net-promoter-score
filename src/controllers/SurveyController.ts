import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
// eslint-disable-next-line import/no-unresolved,  import/extensions
import SurveysRepository from '../repositories/SurveysRepository';

class SurveyController {
  // eslint-disable-next-line class-methods-use-this
  async create(request: Request, response: Response) {
    const { title, description } = request.body;
    const surveysRepository = getCustomRepository(SurveysRepository);
    const survey = surveysRepository.create({
      title, description,
    });
    await surveysRepository.save(survey);
    return response.status(201).json(survey);
  }

  // eslint-disable-next-line class-methods-use-this
  async show(request: Request, response: Response) {
    const surveysRepository = getCustomRepository(SurveysRepository);
    const all = await surveysRepository.find();
    return response.json(all);
  }
}

export default SurveyController;
