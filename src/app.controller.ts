import { UsersService } from './users/users.service';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('data')
export class AppController {

  constructor(private readonly userService: UsersService) {}

  @Get()
  getUser(): string {
    return "Hello";
    //return this.userService.findAll();
  }
}
