import 'reflect-metadata'
import { JsonController, Param, Body, Get, Post, Put, Delete } from 'routing-controllers'
import { Service } from 'typedi'
import { UserRepository } from '../repository/UserRepository'

@Service()
@JsonController()
export class UserController {
  userRepository = new UserRepository()

  constructor() {
    this.userRepository = new UserRepository()
  }

  @Get('/user')
  getAll() {
    return this.userRepository.queryAll()
  }

  @Get('/user/:id')
  getOne(@Param('id') id: number) {
    return this.userRepository.query(id)
  }

  @Post('/user')
  post(@Body() input: any) {
    return this.userRepository.insert(input)
  }

  @Delete('/user/:id')
  remove(@Param('id') id: number) {
    return this.userRepository.delete(id)
  }

  loveMyBaby() {
    const morning = () => {
      console.log("再来一次")
    }
    const name = "hste";
    if (name.length > 0) {
      console.log("yeyeye");
      console.log('test')
    } 
  }
}
