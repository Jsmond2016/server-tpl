const joi = require('joi')

const name = joi.string().alphanum().min(1).max(10).required()
const password = joi.string().pattern(/^[\S]{6,12}$/).required()

exports.userSchema = {
  body: {
    name,
    password
  }
}