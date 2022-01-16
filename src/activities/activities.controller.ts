import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { ActivitiesService } from './activities.service';
import { CreateActivityDto } from './dto/create-activity.dto';

@Controller('activities')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @Post()
  create(
    @Req() request: Request,
    @Body() createActivityDto: CreateActivityDto,
  ) {
    return this.activitiesService.create({
      ...createActivityDto,
      userId: request.cookies.token,
    });
  }

  @Get()
  findAll(@Req() request: Request, @Query() query) {
    const per = query.per || 10;
    const page = query.page || 1;
    return this.activitiesService.findAll(per, page, request.cookies.token);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() request: Request) {
    return this.activitiesService.findOne(id, request.cookies.token);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() request: Request) {
    return this.activitiesService.remove(id, request.cookies.token);
  }
}
