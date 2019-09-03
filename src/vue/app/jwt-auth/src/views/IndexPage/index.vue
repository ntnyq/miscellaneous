<template>
  <div class="index-box">
    <h2>您{{token ? '已经' : '尚未'}}登录</h2>
    <p>
      <span>点击前往</span>
      <router-link v-if="token"
        to="me"
        class="jump-link">个人页面</router-link>
      <router-link v-if="!token"
        to="login"
        class="jump-link">登录页面</router-link>
    </p>
  </div>
</template>

<script>
import './style';
import { mapGetters } from 'vuex';

export default {
  name: 'IndexPage',

  computed: {
    ...mapGetters(['token'])
  }
}
</script>
