import { Module } from '@nestjs/common';
import { ShowService } from './show.service';
import { ShowController } from './show.controller';

@Module({
  controllers: [ShowController],
  providers: [ShowService]
})
export class ShowModule {}
