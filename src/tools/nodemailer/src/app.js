require('dotenv').config()
const nodemailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport')
const { user, pass } = process.env

async function main() {
  const transporter = nodemailer.createTransport(
    smtpTransport({
      host: 'smtp.qq.com',
      secure: true,
      secureConnection: true,
      port: 465,
      auth: { user, pass },
    })
  )

  const mailOptions = {
    from: 'ntnyq <1210485244@qq.com>',
    to: '534155914@qq.com,',
    subject: 'Hello ❤️',
    text: 'Hello world',
    html: 'Are you ok',
  }

  return transporter.sendMail(mailOptions)
}

main()
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
