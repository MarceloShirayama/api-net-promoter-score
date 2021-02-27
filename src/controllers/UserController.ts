/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import * as yup from 'yup';
import UsersRepository from '../repositories/UsersRepository';

class UserController {
  // eslint-disable-next-line class-methods-use-this
  async create(request: Request, response: Response) {
    const { name, email } = request.body;

    const schema = yup.object().shape({
      name: yup.string().required('Nome é obrigatório.'),
      email: yup.string().email('Email inválido').required('Email é óbrigatório.'),
    });

    try {
      await schema.validate(request.body, { abortEarly: false });
    } catch (error) {
      return response.status(400).json({ error });
    }

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
