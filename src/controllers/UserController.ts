import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
// eslint-disable-next-line import/no-unresolved,  import/extensions
import UsersRepository from '../repositories/UsersRepository';

class UserController {
  // eslint-disable-next-line class-methods-use-this
  async create(request: Request, response: Response) {
    // const body = request.body;
    const { name, email } = request.body;
    const usersRepository = getCustomRepository(UsersRepository);
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
    return response.status(201).json(user);
  }

  // eslint-disable-next-line class-methods-use-this
  async show(request: Request, response: Response) {
    const usersRepository = getCustomRepository(UsersRepository);
    const all = await usersRepository.find();
    return response.json(all);
  }
}

// eslint-disable-next-line import/prefer-default-export
export default UserController;
