import { DefaultUserDto } from './default-user.dto';
import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ListUsersDto {
  @ApiProperty({
    required: true,
    type: [DefaultUserDto],
    name: 'data',
  })
  @ValidateNested({ each: true })
  @IsNotEmpty()
  @IsArray()
  @Type(() => DefaultUserDto)
  data: DefaultUserDto[];
}
