import { EntityRepository, Repository } from 'typeorm';
// eslint-disable-next-line import/no-unresolved,  import/extensions
import SurveyUser from '../models/SurveyUser';

@EntityRepository(SurveyUser)
class SurveysUsersRepository extends Repository<SurveyUser> {}

export default SurveysUsersRepository;
