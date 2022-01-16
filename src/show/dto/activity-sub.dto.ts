import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ActivitySub {
  @IsNotEmpty({ message: '名字不能为空' })
  @ApiProperty({
    description: '名字',
  })
  name: string;

  @IsNotEmpty({ message: '活动id不能为空' })
  @ApiProperty({
    description: '活动ID',
  })
  activityId: string;

  @ApiProperty({
    description: '密码',
  })
  email: string;

  @ApiProperty({
    description: '手机号',
  })
  mobile: string;

  @ApiProperty({
    description: '备注',
  })
  remarks: string;
}
