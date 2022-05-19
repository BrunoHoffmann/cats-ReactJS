import { DefaultUserDto } from './default-user.dto';
import { OmitType } from '@nestjs/swagger';

export class CreateUserDto extends OmitType(DefaultUserDto, [
  'id',
  'updatedAt',
  'createdAt',
] as const) {}
