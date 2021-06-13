const express = require('express')
const cors = require('cors')
const { compose } = require('compose-middleware')

// 将 token 字符串还原成用户数据
const expressJWT = require('express-jwt')
const multer  = require('multer')

const homeRouter = require('./routes/home')
const userRouter = require('./routes/user')
const secretKey = require('./config')
const whiteList = require('./config/whiteList')
const upload = multer({ dest: 'upload/' });


const authErrorCatchMiddleware = require('./midlewares/authErrorCatchMiddleware')
const failResolveMiddleware = require('./midlewares/failResolveMiddleware')
const paramsValidator = require('./midlewares/paramsValidator')

const app = express()

// 解析form 表单格式数据
app.use(express.urlencoded({ extended: false }))
// 解析 json 格式数据
app.use(express.json())

// 跨域 测试：https://jsbin.com/toxapivoku/2/edit?js,console,output
app.use(cors())
express.static(__dirname + '/public')
// 将 jwt 字符串解析还原成 json 对象的中间件
app.use(expressJWT({ secret: secretKey, algorithms: ['HS256'] }).unless({ path: whiteList }))

app
.use(authErrorCatchMiddleware)
.use(failResolveMiddleware)

app.use('/home', homeRouter)
app.use('/user', userRouter)

// 单图上传 https://www.cnblogs.com/sexintercourse/p/11783737.html
app.post('/upload', upload.single('logo'), function(req, res, next){
  res.send({ret_code: '0'});
});




app
.use(paramsValidator)


app.listen(8080, () => {
  console.log('start at http://localhost:8080')
})