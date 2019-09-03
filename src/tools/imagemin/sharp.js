const sharp = require('sharp')
const fs = require('fs')

const src = 'dist'
const dist = 'small'

fs.readdir(src, (err, files) => {
  if (err) return err

  files.forEach(file => {
    // let readStream
    // let writeStream
    let oldPath = `${src}/${file}`
    let newPath = `${dist}/${file}`

    if (file.includes('png') || file.includes('jpg')) {
      sharp(oldPath)
        .resize(300)
        // toFile(newPath.replace('jpg', 'png'))
        .toFile(newPath)

      // fs.stat(oldPath, (err, stats) => {
      //     if (err) {
      //         console.log(err);
      //     } else if (stats.isFile()) {
      //         readStream = fs.createReadStream(oldPath);
      //         writeStream = fs.createWriteStream(newPath);
      //         readStream.pipe(resizePic).pipe(writeStream);
      //     }
      // });
    }
  })
})
