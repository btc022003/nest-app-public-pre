import { Module } from '@nestjs/common';
import { ShowService } from './show.service';
import { ShowController } from './show.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ShowController],
  providers: [ShowService, PrismaService],
})
export class ShowModule {}
