const imagemin = require('imagemin')
const imageminMozjpeg = require('imagemin-mozjpeg')
const imageminPngquant = require('imagemin-pngquant')
// const imageminWebp = require('imagemin-webp')

const PNGImages = 'src/*.png'
const JPEGImages = 'src/*.jpg'
const output = 'dist'

const optimiseJPEGImages = () => {
  return imagemin([JPEGImages], output, {
    progressive: true,
    plugins: [
      imageminMozjpeg({
        quality: 70,
      }),
    ],
  })
}

const optimisePNGImages = () => {
  return imagemin([PNGImages], output, {
    progressive: true,
    plugins: [
      imageminPngquant({
        quality: '65-80',
      }),
    ],
  })
}

// const convertPNG2Webp = () => {
//   return imagemin([PNGImages], output, {
//     use: [
//       imageminWebp({
//         quality: 85
//       })
//     ]
//   })
// }

// const convertJPEG2Webp = () => {
//   return imagemin([JPEGImages], output, {
//     use: [
//       imageminWebp({
//         quality: 75
//       })
//     ]
//   })
// }

// optimiseJPEGImages().catch(err => { console.log(err); });

// optimiseJPEGImages()
//   .then(() => optimisePNGImages())
//   .catch(err => { console.log(err); });

optimiseJPEGImages()
  .then(() => optimisePNGImages())
  // .then(() => convertPNG2Webp())
  // .then(() => convertJPEG2Webp())
  .catch(err => {
    console.log(err)
  })
