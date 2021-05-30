/*
 * @Description: 打印日志中间件
 * @Date: 2021-01-27 23:36:15
 * @Author: Jsmond2016 <jsmond2016@gmail.com>
 * @Copyright: Copyright (c) 2020, Jsmond2016
 */
import { Request, Response, NextFunction } from 'express'


export function LoggerMiddleware(req: Request, res: Response, next: NextFunction) {
  const startTime = Date.now()
  const { method, url, query } = req
  console.info(`
  ${method}  ${url} ${query} at ${startTime} 
  ================================================
  ================================================ `)
  next()
}
