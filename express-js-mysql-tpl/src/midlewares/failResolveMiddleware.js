
function failResolveMiddleware(err, req, res, next) {
  console.log('failResolveMiddleware: =========');
  // status=0 => 成功，status=1 => 失败；默认将 status 设置为1，方便处理失败情况
  res.cc = function (err, status = 1) {
   res.send({
      status,
      message: err instanceof Error ? err.message : err
    })
  }
  next()
}

module.exports = failResolveMiddleware