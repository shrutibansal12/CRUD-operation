/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User } from './users.model';
import {v4 as uuid4 } from 'uuid';
@Injectable()
export class UsersService{
  private users : User[] = [];

  insertUser(name:string, age:number, surname:string, email:string){
    const id = uuid4()
    const newUser = new User(id, name, age, surname, email );
    this.users.push(newUser);
    return 'id';
  }

  getUsers(){
    return [...this.users];
  }

  getUser(id:string){
    return this.getUserById(id)[0];
  }

  updateUser(
    id:string,
    name:string,
    age:number,
    surname: string,
    email: string
  ){
    const [targetUser, index] = this.getUserById(id);
    const newUserparams = {targetUser, name, age, surname,email};
    const newUser = new User(id, newUserparams.name,newUserparams.age, newUserparams.surname, newUserparams.email);
    // this.users[index] = newUser;
    return newUser; 

  }

  deleteUser(id:string){
    const [targetUser,index]= this.getUserById(id);
    // this.users.splice(index,1);
  }


  private getUserById(id:string){
    const index = this.users.findIndex((u)=>u.id === id);
    return [this.users[index], index];
  }
}