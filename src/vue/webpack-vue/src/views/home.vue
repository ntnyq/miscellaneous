<template>
  <div class="home">
    Hello world
    <fa-icon
      class="fa-4x"
      name="user"
    />
    <div class="wrap">
      <img
        :src="require('@/assets/images/logo.png')"
        alt="LOGO"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',

  created () {
    console.log(require('@/assets/images/logo.png'))
  },
}
</script>
