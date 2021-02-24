import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
// eslint-disable-next-line import/no-unresolved,  import/extensions
import User from '../models/User';

class UserController {
  // eslint-disable-next-line class-methods-use-this
  async create(request: Request, response: Response) {
    // const body = request.body;
    const { name, email } = request.body;
    const usersRepository = getRepository(User);
    const userAlreadyExists = await usersRepository.findOne({
      email,
    });
    if (userAlreadyExists) {
      return response.status(400).json({
        error: 'User already exixts',
      });
    }
    const user = usersRepository.create({
      name, email,
    });
    await usersRepository.save(user);
    return response.json(user);
  }
}

// eslint-disable-next-line import/prefer-default-export
export { UserController };
