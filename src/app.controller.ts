import { Body, Controller, Get, Param, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // 这个表示监听get请求
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/login')
  login(
    @Body() user: { userName: string; password: string },
    @Res({ passthrough: true }) response: Response,
  ) {
    response.cookie('token', 'xiaohei', { httpOnly: true }); // 此处可以继续完善登陆逻辑，
    return user;
  }

  @Get('/demo')
  demoFun() {
    return '这是一个Demo';
  }

  @Get('/:id')
  getOneById(
    @Param()
    param,
    @Query()
    query,
  ) {
    return {
      param,
      query,
    };
  }
}
