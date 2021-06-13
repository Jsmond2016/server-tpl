const bcrypt = require('bcryptjs')

// 盐值
const salt = bcrypt.genSaltSync(10)

const secretKey = "secretKey-test"

/** 加密密码 */
const encodePassword = (password) => bcrypt.hashSync(password, salt)

/** 比较密码是否一致 */
const comparePwd = (password, hash) => {
  return bcrypt.compareSync(password, hash)
}


module.exports = {
  secretKey,
  encodePassword,
  comparePwd
}