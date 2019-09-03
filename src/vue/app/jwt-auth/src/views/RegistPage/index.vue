<template>
  <div class="regist-box">
    <h2>注册页面</h2>
    <goy-form-box :is-regist="true"
      :btn-text="`注册`"
      @form-submit="submitForm" />
  </div>
</template>

<script>
import './style.scss';
import { mapActions } from 'vuex';

export default {
  name: 'RegistPage',

  methods: {
    submitForm ({ username, password }) {
      this.regist({ username, password }).then(res => {
        this.$router.push({ name: 'LoginPage' });
      });
    },

    ...mapActions(['regist'])
  }
}
</script>

