import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';

@Injectable()
export class ActivitiesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createActivityDto: CreateActivityDto) {
    return this.prisma.activity.create({ data: createActivityDto });
  }

  /**
   * 获取所有的
   * @param per   每页显示的数量
   * @param page  页码
   * @param user  用户id
   * @returns
   */
  findAll(per, page, user) {
    return this.prisma.activity.findMany({
      where: { userId: user },
      skip: (page - 1) * per, // 跳过的数量
      take: per,
    });
  }

  /**
   * 根据id获取一个
   * @param id
   * @param userId 用户ID，每一个用户只能取自己发布的活动
   * @returns
   */
  findOne(id: string, userId: string) {
    return this.prisma.activity.findFirst({
      where: { id, userId },
      // 关联查询
      include: {
        activityLog: true,
      },
    });
  }

  update(id: number, updateActivityDto: UpdateActivityDto) {
    return `This action updates a #${id} activity`;
  }

  /**
   * 根据id删除
   * @param id
   * @returns
   */
  remove(id: string, userId) {
    return this.prisma.activity.deleteMany({ where: { id, userId } });
  }
}
