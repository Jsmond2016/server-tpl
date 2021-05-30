/*
 * @Description: 错误捕获中间件
 * @Date: 2021-01-27 23:32:01
 * @Author: Jsmond2016 <jsmond2016@gmail.com>
 * @Copyright: Copyright (c) 2020, Jsmond2016
 */
import { Request, Response , NextFunction } from 'express'

export function ErrCatchMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {
  try {
   next() 
  } catch (error) {
   console.log('error-------', error)
  }
}