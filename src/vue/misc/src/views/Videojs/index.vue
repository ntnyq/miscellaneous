<template>
  <div class="videojs">
    <h1>Vue Video Player Demo</h1>
    <video-player
      class="video-player-box"
      ref="videoPlayer"
      :options="playerOptions"
      playsinline
      @play="onPlayerPlay($event)"
      @pause="onPlayerPause($event)"
      @ended="onPlayerEnded($event)"
      @loadeddata="onPlayerLoadeddata($event)"
      @waiting="onPlayerWaiting($event)"
      @playing="onPlayerPlaying($event)"
      @timeupdate="onPlayerTimeupdate($event)"
      @canplay="onPlayerCanplay($event)"
      @canplaythrough="onPlayerCanplaythrough($event)"
      @ready="playerReadied"
      @statechanged="playerStateChanged($event)"
    />
  </div>
</template>

<script>
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'

export default {
  name: 'Videojs',

  components: {
    videoPlayer
  },

  computed: {
    player () {
      return this.$refs['videoPlayer'].player
    }
  },

  data () {
    return {
      playerOptions: {
        controls: true,
        autoplay: true,
        fluid: true,
        muted: true,
        poster: 'http://img.hb.aicdn.com/38bd1d5f32251997cf365f7625a95336b630df6399d7-BPWOGS_fw658',
        sources: [
          {
            type: 'video/mp4',
            src: 'http://vodcdn.video.taobao.com/oss/ali-video/2e27345d58b045f6b0a391e0ee16c7b7/1465789891/video.mp4'
          }
        ]
      }
    }
  },

  methods: {
    // listen event
    onPlayerPlay (player) {
      console.log('player play!', player)
    },
    onPlayerPause (player) {
      console.log('player pause!', player)
    },
    onPlayerEnded (player) {
      console.log('player ended!', player)
    },
    onPlayerLoadeddata (player) {
      console.log('player Loadeddata!', player)
    },
    onPlayerWaiting (player) {
      console.log('player Waiting!', player)
    },
    onPlayerPlaying (player) {
      console.log('player Playing!', player)
    },
    onPlayerTimeupdate (player) {
      console.log('player Timeupdate!', player.currentTime())
    },
    onPlayerCanplay (player) {
      console.log('player Canplay!', player)
    },
    onPlayerCanplaythrough (player) {
      console.log('player Canplaythrough!', player)
    },
    // or listen state event
    playerStateChanged (playerCurrentState) {
      console.log('player current update state', playerCurrentState)
    },
    // player is ready
    playerReadied (player) {
      // seek to 10s
      console.log('example player 1 readied', player)
      player.currentTime(10)
      console.log('example 01: the player is readied', player)
    }
  },

  mounted () {
    // console.log('this is current player instance object', this.player)
    setTimeout(() => {
      console.log('dynamic change options', this.player)
      // change src
      // this.playerOptions.sources[0].src = 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm';
      // change item
      // this.$set(this.playerOptions.sources, 0, {
      //   type: "video/mp4",
      //   src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
      // })
      // change array
      // this.playerOptions.sources = [{
      //   type: "video/mp4",
      //   src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
      // }]
      this.player.muted(false)
    }, 2000)
  }
}
</script>

<style lang="scss">
.videojs {
  flex-direction: column;

  h1 {
    padding: 20px 20px;
    text-align: center;
    font-size: 24px;
  }

  .video-player {
    flex: 1;
    padding: 15px;
    width: 100%;
    max-width: 1080px;
  }
}
</style>
