<template>
  <div class="goy-form-box">
    <form>
      <div class="form-row">
        <label for="name_input">
          <goy-icon :name="`user2`" />
        </label>
        <input v-model.trim="username"
          id="name_input"
          type="text"
          autocomplete="new-password"
          placeholder="请输入用户名" />
      </div>
      <div class="form-row">
        <label for="passwd_input">
          <goy-icon :name="`password`" />
        </label>
        <input v-model.trim="password"
          id="passwd_input"
          type="password"
          autocomplete="new-password"
          placeholder="请输入密码" />
      </div>
      <div v-if="isRegist"
        class="form-row">
        <label for="passwd_input2">
          <goy-icon :name="`password`" />
        </label>
        <input v-model.trim="password2"
          id="passwd_input2"
          type="password"
          autocomplete="new-password"
          placeholder="请确认密码" />
      </div>
      <div class="form-row">
        <button @click="handleClick"
          type="button">{{btnText}}</button>
      </div>
    </form>
  </div>
</template>

<script>
import './style.scss';

export default {
  name: 'GoyFormBox',

  props: {
    btnText: {
      type: String,
      default: '确定'
    },

    isRegist: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      username: '',
      password: '',
      password2: ''
    };
  },

  methods: {
    handleClick () {
      const { username, password, password2 } = this;

      if (!username) {
        alert('用户名必填');
        return;
      }

      if (!password || password.length < 6) {
        alert('密码必填且必须大于6位');
        return;
      }

      if (this.isRegist && password2 !== password) {
        alert('两次密码输入不一致');
        return;
      }

      this.$emit('form-submit', { username, password });
    }
  }
}
</script>

