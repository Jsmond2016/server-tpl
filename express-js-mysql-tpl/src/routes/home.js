const express = require('express')
const router = express.Router()

console.log('HOME=====')

router.get('/list', (req, res) => {
  res.send({
    status: 200,
    msg: 'get 请求成功！',
    data: req.query
  })
})

router.post('/add-list', (req, res) => {
  res.send({
    status: 200,
    msg: 'post 请求成功！',
    data: req.body
  })
})


module.exports = router