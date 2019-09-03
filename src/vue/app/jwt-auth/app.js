require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./server/config')

const { dbUrl } = config

const app = express()

mongoose.connect(dbUrl)

app.set('port', process.env.PORT || 8086)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

require('./server/routes')(app)

app.listen(app.get('port'), () => {
  console.log('Server is runing at 127.0.0.1:' + app.get('port'))
})

module.exports = app
