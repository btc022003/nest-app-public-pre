import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  loadData() {
    return this.usersService.loadAll();
  }

  @Get(':id')
  getOne(@Param() params) {
    return this.usersService.findOne(params.id);
  }
}
