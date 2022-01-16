import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegDto } from './dto/reg.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('reg')
  async reg(
    @Body() user: RegDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    //
    const data = await this.authService.reg(user);
    response.cookie('token', data.id, { httpOnly: true });
    return '注册成功';
  }

  @Post('login')
  async login(
    @Body() user: LoginDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    //
    const data = await this.authService.login(user.userName, user.password);
    data.success ? response.cookie('token', data.data, { httpOnly: true }) : '';
    return '登陆成功';
  }
}
