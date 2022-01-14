import { Injectable } from '@nestjs/common';

const people = [
  {
    id: 1,
    name: 'user-1',
  },
  {
    id: 2,
    name: 'user-2',
  },
  {
    id: 3,
    name: 'user-3',
  },
  {
    id: 4,
    name: 'user-4',
  },
];

@Injectable()
export class UsersService {
  loadAll() {
    return people;
  }

  findOne(id) {
    return people.find((item) => item.id == id);
  }
}
