const expressJwt = require('express-jwt')
const ApiUser = require('../controllers/apiUser')

const secret = process.env.JWT_SECRET
const auth = expressJwt({ secret })

module.exports = app => {
  app.use((req, res, next) => {
    next()
  })

  app.post('/api/login', ApiUser.login)

  app.post('/api/logout', auth, ApiUser.logout)

  app.post('/api/regist', ApiUser.regist)

  app.use((err, req, res, next) => {
    if (err.name == 'UnauthorizedError') {
      res.status(401)
      res.send({ msg: err.name + ':' + err.message })
    }
  })
}
