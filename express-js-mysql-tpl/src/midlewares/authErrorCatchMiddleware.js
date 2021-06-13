

function authErrorCatchMiddleware(err, req, res, next,) {
  if (err.name === 'UnauthorizedError') {
    return res.send({
      status: 401,
      message: '无效的token'
    })
  }
  next()
}

module.exports = authErrorCatchMiddleware