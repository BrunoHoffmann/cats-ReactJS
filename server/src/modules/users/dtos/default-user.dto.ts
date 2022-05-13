import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class DefaultUserDto {
  @ApiProperty({
    required: false,
    type: String,
    example: '6267df375f6e88989d302db0',
    name: 'id',
  })
  @IsOptional()
  @IsString()
  id?: string;

  @ApiProperty({
    required: true,
    type: String,
    example: 'example name',
    name: 'name',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

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

  @ApiProperty({
    required: true,
    type: Date,
    example: '2022-01-17 12:15:00',
    name: 'updatedAt',
  })
  @IsNotEmpty()
  updatedAt: Date;

  @ApiProperty({
    required: true,
    type: Date,
    example: '2022-01-17 12:15:00',
    name: 'createdAt',
  })
  @IsNotEmpty()
  createdAt: Date;
}
