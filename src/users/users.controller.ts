/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly userservice: UsersService) {}

  @Get()
  getUsers() {
    return 'Hello';
  }
   @Post()
    insertUser(
      @Body('name') name: string,
      @Body('age') age: number,
      @Body('surname') surname: string,
      @Body('email') email: string,
    ){
      const userId = this.userservice.insertUser(name, age, surname, email);
      return {
        id: userId,
      }
    }

    @Get()
    getAllUsers(){
      return this.userservice.getUsers();
    }

    @Get(':userId')
    getUser(@Param('userId') userId:string){
      return this.userservice.getUser(userId);
    }

    @Put(':userId')
    updateUser(
      @Param('userId') userId :string,
      @Body('name') name:string,
      @Body('age') age:number,
      @Body('surname') surname:string,
      @Body('email') email:string,   
    ){
      return this.userservice.updateUser(userId, name, age, surname, email);
    }


    @Delete(':userId')
    deleteUser(@Param('userId') userId:string){
      this.userservice.deleteUser(userId);
    }
}
