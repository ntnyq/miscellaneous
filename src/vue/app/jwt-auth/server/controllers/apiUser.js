const jwt = require('jsonwebtoken')
const User = require('../models/user')

const secret = process.env.JWT_SECRET

exports.login = (req, res) => {
  const { username, password } = req.body

  User.findOne({ username }, (err, _user) => {
    if (err) {
      res.send({
        type: false,
        msg: `Oops, an error occured: ${err}`,
      })
    } else {
      if (_user) {
        _user.comparePassword(password, (err, isMatch) => {
          if (err) {
            res.send({
              type: false,
              msg: `Oops, an error occured: ${err}`,
            })
          }

          if (isMatch) {
            let token = jwt.sign(
              {
                _id: _user._id,
                username: _user.username,
                exp: Math.floor(Date.now() / 1000) + 60 * 60,
              },
              secret
            )

            res.send({
              type: true,
              data: _user,
              token,
            })
          } else {
            res.send({
              type: false,
              msg: 'Username and password dont match!',
            })
          }
        })
      } else {
        res.send({
          type: false,
          msg: 'You need regist first!',
        })
      }
    }
  })
}

exports.logout = (req, res) => {
  res.send({
    type: true,
    msg: 'Logout success!',
  })
}

exports.regist = (req, res) => {
  const { username, password } = req.body

  let newUser = new User({ username, password })

  User.findOne({ username }, (err, user) => {
    if (err) {
      res.send({
        type: false,
        msg: `Oops, an error occured: ${err}`,
      })
    } else {
      if (user) {
        res.send({
          type: false,
          msg: 'The username has been registed!',
        })
      } else {
        newUser.save((err, _user) => {
          if (err) {
            res.send({
              type: false,
              msg: `Oops, an error occured: ${err}`,
            })

            return
          }

          let token = jwt.sign(
            {
              _id: _user._id,
              username: _user.username,
              exp: Math.floor(Date.now() / 1000) + 60 * 60,
            },
            secret
          )

          res.send({
            type: true,
            data: _user,
            token,
          })
        })
      }
    }
  })
}
