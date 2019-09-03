<template>
  <div class="person-box">
    <h2>个人页面</h2>
    <p>Hello, 我是{{username}}</p>
  </div>
</template>

<script>
import './style.scss';
import { mapGetters } from 'vuex';

export default {
  name: 'PersonPage',

  computed: {
    ...mapGetters([
      'token',
      'username'
    ])
  }
}
</script>
