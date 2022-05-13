import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AuthRequestDto {
  @ApiProperty({
    required: true,
    type: String,
    example: 'example email',
    name: 'email',
  })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({
    required: true,
    type: String,
    example: 'example password',
    name: 'password',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}
