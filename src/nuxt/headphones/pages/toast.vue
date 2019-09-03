<template>
  <div class="container">
    <p>
      <button
        @click="showLoginError"
        type="button"
      >
        Notif me
      </button>
    </p>

    <p>
      Home - <nuxt-link to="/index">Index</nuxt-link>
    </p>
  </div>
</template>

<script>
let miniToastr

if (process.client) {
  miniToastr = require('mini-toastr').default
}

export default {
  name: 'toast',
  mounted () {
    miniToastr.init()
  },
  methods: {
    showLoginError () {
      miniToastr.info('Hello world', 'Notication from nuxt.js')
    }
  }
  // notifications: {

  // }
}
</script>
