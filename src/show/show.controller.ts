import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ActivitySub } from './dto/activity-sub.dto';
import { ShowService } from './show.service';

@Controller('show')
export class ShowController {
  constructor(private readonly showService: ShowService) {}
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.showService.findOne(id);
  }

  @Post('sub')
  sub(@Body() log: ActivitySub) {
    return this.showService.sub(log);
  }
}
