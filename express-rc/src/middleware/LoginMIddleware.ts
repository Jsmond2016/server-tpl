/*
 * @Description: 登录中间件
 * @Date: 2021-01-27 23:25:58
 * @Author: Jsmond2016 <jsmond2016@gmail.com>
 * @Copyright: Copyright (c) 2020, Jsmond2016
 */
 import { Request, Response, NextFunction } from 'express'

 export function LoginMiddleware(req: Request, res: Response, next: NextFunction) {
   const cookie  = req.cookies
   const { session_id } = cookie
   if (!session_id) {
     throw new Error("未登录，请重新登陆")
     res.redirect('http://localhost:8080/login')
   }
   next()
 }