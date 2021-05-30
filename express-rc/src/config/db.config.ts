/*
 * @Description: 
 * @Date: 2021-01-26 23:35:29
 * @Author: Jsmond2016 <jsmond2016@gmail.com>
 * @Copyright: Copyright (c) 2020, Jsmond2016
 */

 
// https://typeorm.biunav.com/zh/connection.html#%E5%88%9B%E5%BB%BA%E6%96%B0%E7%9A%84%E8%BF%9E%E6%8E%A5


import { getConnectionManager, ConnectionManager, Connection } from "typeorm";

const connectionManager = getConnectionManager();
const connection = connectionManager.create({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "test",
  password: "test",
  database: "test"
});
const connectionPromise = await connection.connect(); // 执行连接
export default connectionPromise
