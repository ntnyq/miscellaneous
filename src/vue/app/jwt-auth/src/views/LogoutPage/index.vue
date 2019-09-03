<template>
  <div class="logout-box">
    <h2>退出页面</h2>
    <button @click="handleLogout"
      type="button">点击退出</button>
  </div>
</template>

<script>
import './style.scss';
import { mapActions } from 'vuex';

export default {
  name: 'LogoutPage',

  methods: {
    handleLogout () {
      this.logout().then(() => {
        this.$router.push({ name: 'IndexPage' });
      });
    },

    ...mapActions(['logout'])
  }
}
</script>
