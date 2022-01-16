import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class RegDto {
  @IsNotEmpty({ message: '用户名不能为空' })
  @ApiProperty({
    description: '用户名',
  })
  userName: string;

  @IsNotEmpty({ message: '密码不能为空' })
  @ApiProperty({
    description: '密码',
  })
  password: string;
  nickName: string;
  email: string;
  mobile: string;
  remarks: string;
}
