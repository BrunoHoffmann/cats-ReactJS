import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

export type User = any;

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Bruno',
      email: 'bruno@gmail.com',
      password: 'teste',
    },
  ];

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }

  async list() {
    return { data: this.users };
  }

  async create(data: CreateUserDto) {
    return { data: this.users };
  }
}
