/*
 * @Description: 
 * @Date: 2021-01-24 17:37:30
 * @Author: Jsmond2016 <jsmond2016@gmail.com>
 * @Copyright: Copyright (c) 2020, Jsmond2016
 */
import 'reflect-metadata'; 
import {createExpressServer, useContainer, useExpressServer} from "routing-controllers";
import {Container} from "typedi";
import UserController from './controller/UserController'
import { LoggerMiddleware } from './middleware/LoggerMiddleware';
import { LoginMiddleware } from './middleware/LoginMIddleware';
import { ErrCatchMiddleware } from './middleware/ErrorCatchMiddleware';

const expressApp = createExpressServer({
  classTransformer: true,
  controllers: [
    UserController
  ],
  middlewares: [
    LoggerMiddleware,
    LoginMiddleware,
    ErrCatchMiddleware
  ]
})

useContainer(Container);


expressApp.listen(3000, () => {
  console.log('listen at port 3000')
})