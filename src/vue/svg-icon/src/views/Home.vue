<template>
  <div class="home">
    <router-link class="link"
      to="/icons">去往图标页</router-link>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="scss" scoped>
.link {
  display: block;
  width: 200px;
  margin: 100px auto;
  font-size: 40px;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
}
</style>
