<template>
  <div class="login-box">
    <h2>登录页面</h2>
    <goy-form-box :btn-text="`登录`"
      @form-submit="submitForm" />
  </div>
</template>

<script>
import './style.scss';
import { mapActions } from 'vuex';

export default {
  name: 'LoginPage',

  methods: {
    submitForm ({ username, password }) {
      this.login({ username, password }).then(res => {
        this.$router.push({ name: 'PersonPage' });
      });
    },

    ...mapActions(['login'])
  }
}
</script>
