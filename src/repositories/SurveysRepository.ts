import { EntityRepository, Repository } from 'typeorm';
// eslint-disable-next-line import/no-unresolved,  import/extensions
import Survey from '../models/Survey';

@EntityRepository(Survey)
class SurveysRepository extends Repository<Survey> {}

export default SurveysRepository;
