import { Injectable, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { encodePwd } from 'src/utils/tools';
import { RegDto } from './dto/reg.dto';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * 注册
   * @param user
   * @returns
   */
  async reg(user: RegDto) {
    return this.prisma.user.create({
      data: { ...user, password: encodePwd(user.password) },
    });
  }

  /**
   * 登陆
   * @param userName
   * @param password
   * @returns
   */
  async login(userName: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { userName } });
    if (user) {
      const pwd = encodePwd(password);
      if (user.password == pwd) {
        return {
          success: true,
          errorMessage: '登陆成功',
          data: user.id,
        };
      } else {
        return {
          success: false,
          errorMessage: '密码错误',
          data: '',
        };
      }
    } else {
      return {
        success: false,
        errorMessage: '用户信息不存在',
        data: '',
      };
    }
  }
}
