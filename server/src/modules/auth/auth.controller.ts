import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody } from '@nestjs/swagger';
import { AuthRequestDto } from './dtos/auth-request.dto';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  @Post('/login')
  @UseGuards(LocalAuthGuard)
  @ApiBody({ type: AuthRequestDto })
  async login(@Request() req) {
    return req.user;
  }
}
