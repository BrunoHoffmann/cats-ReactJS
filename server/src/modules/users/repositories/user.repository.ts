import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { UsersEntity } from '../entities/user.entity';
import { User as UserSchema } from '../schemas/user.shema';
import { IUserRepository } from './user-repository.interface';

export class UserRepository implements IUserRepository {
  constructor(
    @InjectModel(UserSchema.name)
    private userModel: Model<UserSchema>,
  ) {}

  async create(user: UsersEntity): Promise<UserSchema> {
    return this.userModel.create(user.toObject());
  }

  async update(_id: string, user: UsersEntity): Promise<UserSchema> {
    const result = await this.userModel.findOneAndUpdate({ _id }, user, {
      timestamps: true,
      new: true,
    });

    return result;
  }

  async list(): Promise<UserSchema[]> {
    return this.userModel.find({}, { updatedAt: 0, __v: 0, id: 0 });
  }

  async getById(_id: string): Promise<UserSchema> {
    return this.userModel.findOne({ _id }, { updatedAt: 0, __v: 0, id: 0 });
  }

  async findOne(query: any, fields: any = null): Promise<UserSchema> {
    return this.userModel.findOne(query, fields);
  }
}
