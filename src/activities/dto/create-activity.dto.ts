import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateActivityDto {
  @IsNotEmpty()
  @ApiProperty({
    description: '活动名字',
  })
  name: string;
  @ApiProperty({
    description: '活动简介',
  })
  desc: string;
  @ApiProperty({
    description: '活动内容',
  })
  content: string;
  @ApiProperty({
    description: '活动封面',
  })
  coverImage: string;
  @ApiProperty({
    description: '活动发布人',
  })
  userId: string;
}
