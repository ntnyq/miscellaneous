const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const config = require('../config')

const { SALT_ROUNDS } = config

const UserSchema = new mongoose.Schema({
  username: {
    unique: true,
    type: String,
  },

  password: String,

  meta: {
    updateAt: {
      type: Date,
      default: Date.now(),
    },
    createAt: {
      type: Date,
      default: Date.now(),
    },
  },
})

// 这里不可以使用箭头函数 箭头函数会保留this指向 让它指向UserSchema实例
UserSchema.pre('save', function(next) {
  const user = this

  if (user.isNew) {
    user.meta.createAt = Date.now()
    user.meta.updateAt = Date.now()
  } else {
    user.meta.updateAt = Date.now()
  }

  bcrypt
    .hash(user.password, SALT_ROUNDS)
    .then(hash => {
      user.password = hash
      next()
    })
    .catch(next)
})

UserSchema.methods = {
  comparePassword(_password, cb) {
    bcrypt
      .compare(_password, this.password)
      .then(isMatch => {
        cb(null, isMatch)
      })
      .catch(cb)
  },
}

UserSchema.statics = {
  findByName(username, cb) {
    return this.findOne({ username }).exec(cb)
  },
}

module.exports = UserSchema
