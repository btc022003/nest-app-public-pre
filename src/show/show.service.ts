import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ActivitySub } from './dto/activity-sub.dto';

@Injectable()
export class ShowService {
  constructor(private readonly prisma: PrismaService) {}

  findOne(id: string) {
    return this.prisma.activity.findUnique({ where: { id } });
  }

  sub(data: ActivitySub) {
    return this.prisma.activityLog.create({
      data,
    });
  }
}
