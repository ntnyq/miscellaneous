const express = require('express')
const multer = require('multer')
const path = require('path')
const cors = require('cors')

const uploadFolder = './temp/'

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.join(__dirname, uploadFolder))
  },

  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}-${file.originalname}`)
  },
})

const upload = multer({ storage })
const app = express()

app.use(cors())

app.use(express.static(path.join(__dirname, '/')))
app.post('/upload', upload.single('video'), (req, res, next) => {
  res.end('Upload success')
})

app.listen(9527, () => {
  console.log('Express is serving at 9527')
})
