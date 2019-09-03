<template>
  <div class="font-awesome">
    <font-awesome-icon
      v-for="icon in brands"
      :color="icon.color"
      :key="icon.name"
      :icon="['fab', icon.name]"
      class="fa-icon"
      size="4x"
    />
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faTwitter,
  faGithub,
  faInstagram,
  faApple,
  faMicrosoft,
  faChrome,
  faWeibo,
  faWeixin,
  faWhatsapp,
  faReact,
  faVuejs,
  faGoogle,
  faYoutube,
  faZhihu
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faTwitter,
  faGithub,
  faInstagram,
  faApple,
  faMicrosoft,
  faChrome,
  faWeibo,
  faWeixin,
  faWhatsapp,
  faReact,
  faVuejs,
  faGoogle,
  faYoutube,
  faZhihu
)

export default {
  name: 'FontAwesome',

  components: {
    FontAwesomeIcon
  },

  data () {
    return {
      brands: [
        { name: 'twitter', color: 'blue' },
        { name: 'github', color: 'indigo' },
        { name: 'instagram', color: 'purple' },
        { name: 'apple', color: 'black' },
        { name: 'microsoft', color: 'indigo' },
        { name: 'chrome', color: 'orange' },
        { name: 'weixin', color: 'teal' },
        { name: 'weibo', color: '#fa9123' },
        { name: 'whatsapp', color: 'black' },
        { name: 'react', color: 'darkblue' },
        { name: 'vuejs', color: 'green' },
        { name: 'google', color: 'yellow' },
        { name: 'youtube', color: 'red' },
        { name: 'zhihu', color: 'skyblue' }
      ]
    }
  }
}
</script>

<style lang="scss">
.font-awesome {
  flex-wrap: wrap;
  max-width: 800px;
  margin: 0 auto;
  align-content: center;

  .fa-icon {
    margin: 20px;
  }
}
</style>
