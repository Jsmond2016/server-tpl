/*
 * @Description: 用户管理
 * @Date: 2021-01-24 17:54:51
 * @Author: Jsmond2016 <jsmond2016@gmail.com>
 * @Copyright: Copyright (c) 2020, Jsmond2016
 */
import {
  JsonController,
  ContentType,
  QueryParams,
  Controller,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
  QueryParam,
} from "routing-controllers"
import { Service } from "typedi"
import UserService from "../service/UserService"
import { User } from "../model/User.dto"
import { validate } from "class-validator"
import { plainToClass } from "class-transformer"

@Service()
@JsonController("/user")
export default class UserController {
  constructor(private userService: UserService) {}

  @Get("/get-user")
  public async index(@QueryParam("id") id: Pick<User, "id">) {
    console.log("id===", id)
    // const response = await this.userService.getUser()
    return {}
  }

  @Post("/add-user")
  public async addUser(@Body() user: User) {
    const errs = await validate(plainToClass(User, user))
    if (errs.length) {
      const msg = errs.map((item) => item.constraints)
      return {
        code: 500,
        data: msg,
      }
    }
    return {
      code: 200,
      data: {},
    }
  }
}
