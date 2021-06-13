const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const expressJoi = require('@escook/express-joi')

const { secretKey, encodePassword, comparePwd } = require('../config')
const { userSchema } = require('../schema/user')
const db = require('../db/index')


// 注册
const registerAction = (req, res) => {
  console.log('registerAction: ========');
  const { name, password } = req.body
  const query = "select * from env_user where name=?"

  db.query(query, name, (err, result) => {
    // 执行失败
    if (err) return res.cc(err)
    if (result.length > 0) {
      return res.send({ status: 1, message: '用户名被占用，请更换其他用户名！' })
    }

    const addUser = "insert into env_user (name, password) values (?, ?)"
    const bcryptPassword = encodePassword(password)

    db.query(addUser, [name, bcryptPassword], (err, result) => {
      // 执行失败
      if (err) return res.cc(err)
      if (result.affectedRows !== 1) {
        return res.cc('注册失败，请稍后尝试')
      }
      res.send({
        status: 200,
        msg: "注册成功！",
        data: {}
      })
    })
  })
}

const loginAction = (req, res) => {
  const { name, password } = req.body
  const query = "select * from env_user where name=?"

  db.query(query, name, (err, result) => {
    if (err) return res.cc('登录失败')

    const { password: hash } = result[0]
    const flag = comparePwd(password, hash)
    if (!flag) return res.cc('密码错误，请稍后尝试', 400)

    res.send({
      status: 200,
      message: '登录成功',
      token: jwt.sign({ name }, secretKey, { expiresIn: '10h' })
    })
  })
}


const getUserInfo = (req, res) => {
  // 使用 express-jwt 后会在 req 加上一个 user 对象 
  const user = req.user
  res.send({
    status: 200,
    message: 'success...',
    data: user
  })
}


// 注册
router.post('/register', expressJoi(userSchema), registerAction)

// 登录
router.post('/login', expressJoi(userSchema), loginAction)

// 获取用户信息
router.get('/get-user-info', getUserInfo)



module.exports = router