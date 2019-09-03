<template>
  <div class="goy-navbar">
    <router-link to="/"
      class="logo">vLogin</router-link>
    <div class="navbar-menu"
      v-if="data.length">
      <a :class="{ active: item.isActive }"
        v-show="item.isShow"
        v-for="item in menu"
        :key="item.name"
        :href="`#${item.path}`">{{item.name}}</a>
    </div>
  </div>
</template>

<script>
import './style.scss';
import { mapGetters } from 'vuex';

export default {
  name: 'GoyNavbar',

  props: {
    data: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    isLogin () {
      return !!this.token;
    },
    ...mapGetters(['token'])
  },

  data () {
    return {
      menu: []
    };
  },

  watch: {
    '$route': {
      handler (to) {
        const { isLogin, token, data } = this;
        const toPath = to.path || '/';
        let navMenu = [];

        data.map(item => {
          let { name, path, hideAfterLogin, hideBeforeLogin } = item,
            isActive = false,
            isShow = true;

          isLogin && hideAfterLogin && (isShow = false); // 隐藏登录后需要隐藏的
          !isLogin && hideBeforeLogin && (isShow = false); // 隐藏未登录需要隐藏的

          path === toPath && (isActive = true);

          navMenu.push({
            name,
            path,
            isActive,
            isShow
          });

          this.menu = navMenu;
        });
      },

      immediate: true
    }
  }
}
</script>

