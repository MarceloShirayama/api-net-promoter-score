import { EntityRepository, Repository } from 'typeorm';
// eslint-disable-next-line import/no-unresolved,  import/extensions
import User from '../models/User';

@EntityRepository(User)
class UsersRepository extends Repository<User> {}

export default UsersRepository;
