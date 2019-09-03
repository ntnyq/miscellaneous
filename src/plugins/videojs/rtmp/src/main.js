import videojs from 'video.js'
import 'videojs-flash'
import 'video.js/dist/video-js.min.css'
import './style.scss'

const playerOptions = {
  poster:
    'http://img.hb.aicdn.com/43531cc1e0a10212ce4675d2a9c67a94567d3d1bf5de2-evwnCb_fw658',
  preload: 'auto',
  fluid: true,
  controls: true,
  autoplay: !1,
  loop: true,
  // muted: true,
  techOrder: ['html5', 'flash'],
  responsive: true,
  controlBar: {
    children: [
      { name: 'playToggle' },
      { name: 'progressControl' },
      { name: 'currentTimeDisplay' },
      { name: 'durationDisplay' },
      { name: 'timeDivider' },
      { name: 'volumePanel', inline: true /* true横向 */ },
      { name: 'fullscreenToggle' },
    ],
  },
}

const player = videojs('video_player', playerOptions, () => {
  console.log(`Video player initialize successfully!`)
})
