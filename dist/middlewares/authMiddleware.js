const jwt = require("jsonwebtoken")
const { LOCAL_JWT_SECRET } = require('../utils/consts')

  const authMiddleware = (req, res, next) => {
    // 从请求头里取 Authorization
    const authHeader = req.headers["authorization"]
    if (!authHeader) {
      return res.status(401).json({ message: "缺少 Authorization header" })
    }

    // 格式应为 "Bearer <token>"
    const token = authHeader.split(" ")[1]
    if (!token) {
      return res.status(401).json({ message: "缺少 token" })
    }

    try {
      // 校验并解码 token
      const decoded = jwt.verify(token, LOCAL_JWT_SECRET)
      req.user = decoded  // 挂到请求对象上，后续接口就能拿到用户信息 { userId: "xxx" }
      next()              // 放行到下一个处理函数
    } catch (err) {
      return res.status(403).json({ message: "无效或过期的 token" })
    }
  }



module.exports = {authMiddleware}