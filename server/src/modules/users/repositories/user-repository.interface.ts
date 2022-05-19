import { UsersEntity } from '../entities/user.entity';
import { User as UserDocument } from '../schemas/user.shema';

export interface IUserRepository {
  list(): Promise<UserDocument[]>;
  getById(id: string): Promise<UserDocument>;
  findOne(query: unknown, fields: unknown): Promise<UserDocument>;
  create(user: UsersEntity): Promise<UserDocument>;
  update(id: string, user: UsersEntity): Promise<UserDocument>;
}
