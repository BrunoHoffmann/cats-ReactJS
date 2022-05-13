import { Controller, Get, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { ListUsersDto } from './dtos/list-users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @ApiResponse({ type: ListUsersDto })
  async list() {
    return this.usersService.list();
  }

  @Post()
  async create() {
    return this.usersService.create();
  }
}
