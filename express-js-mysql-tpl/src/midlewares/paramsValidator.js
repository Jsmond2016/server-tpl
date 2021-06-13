
const Joi = require('joi')

function paramsValidator(err, req, res, next) {
  console.log('===xxxxxxxxxxxxxxxx=========');
  // 数据校验失败
  if (err instanceof Joi.ValidationError) {
    console.log('err: ', err);
    const msg = err.details.map(item => item.message)[0]
    return res.send({status: 500, message: msg, data: {} })
  }
  next()
}

module.exports = paramsValidator