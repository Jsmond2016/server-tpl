const mysql = require('mysql')

const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'express_test'
})

module.exports = db

// 数据的增删查改操作:https://www.runoob.com/mysql/mysql-union-operation.html
// INSERT INTO table_name ( field1, field2,...fieldN ) VALUES ( value1, value2,...valueN );
// SELECT column_name,column_name FROM table_name [WHERE Clause] [LIMIT N][ OFFSET M]
// DELETE FROM table_name [WHERE Clause]
// ** 注意：用户可能是不小心删除了数据，不能真正的删除，应该使用标记删除(更新状态)：UPDATE TABLE_NAME SET delete_status = 1 where id=1
// UPDATE table_name SET field1=new-value1, field2=new-value2 [WHERE Clause]
// 条件：AND, OR: ==> eg:update test_user set name="new-name" where id=0 and status > 3
// 排序：ORDER BY: ASC/DESC ==> 升序(默认)/降序 ==> eg: select * from test_user order by status asc
// 多重排序-加逗号拼接字段排序：ORDER BY: ASC/DESC ==> 升序(默认)/降序 ==> eg: select * from test_user order by status asc, id desc
// COUNT(*) 函数统计数量：select count(*) from test_user
// 起别名：as xxx  ==> eg: select username as name, password as pwd from test_user




// 测试数据库连接：node db/index.js
// const selectQuery = "select 1 "
// db.query(selectQuery, (err, result) => {
//   if (err) {
//     console.log('err: ', err)
//     return
//   }
//   console.log('results===', result)
// })

// 插入数据
// const addUser = "INSERT INTO TEST_USER (name, age, phone) values('测试', 18, '13489890909')"
// ***返回值 result：核心判断 result.affectedRows === 1,
// {
//   fieldCount: 0,
//   affectedRows: 1,
//   insertId: 1,
//   serverStatus: 2,
//   warningCount: 0,
//   message: '',
//   protocol41: true,
//   changedRows: 0
// }
// db.query(addUser, (err, result) => {
//     if (err) {
//       console.log('err: ', err)
//       return
//     }
//     console.log('results===', result)
//   })


// 查询数据：
// const selectUsers = "SELECT * FROM TEST_USER"
// *** 返回值：一个数组 [ RowDataPacket { id: 1, name: '测试', age: 18, phone: '13489890909' } ]
// db.query(selectUsers, (err, result) => {
//     if (err) {
//       console.log('err: ', err)
//       return
//     }
//     console.log('results===', result)
//   })

// 使用参数：db.query(db, params, () => void) 第二个参数是个数组，传入对应的值即可
// const insertItem = "INSERT INTO TEST_USER (name, age, phone) values (?, ?, ?)"

// db.query(insertItem, ['小明', 24, '13489890909'], (err, result) => {
//   if (!err) {
//     console.log('result: ', result)
//   }
// })