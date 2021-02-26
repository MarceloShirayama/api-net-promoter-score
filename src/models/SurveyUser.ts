/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import {
  Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import User from './User';
import Survey from './Survey';

@Entity('surveys_users')
class SurveyUser {
  @PrimaryColumn()
  readonly id: string

  @Column()
  // eslint-disable-next-line camelcase
  user_id: string

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User

  @Column()
  // eslint-disable-next-line camelcase
  survey_id: string

  @ManyToOne(() => Survey)
  @JoinColumn({ name: 'survey_id' })
  survey: Survey

  @Column()
  // eslint-disable-next-line camelcase
  value: number

  @CreateDateColumn()
  // eslint-disable-next-line camelcase
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default SurveyUser;
