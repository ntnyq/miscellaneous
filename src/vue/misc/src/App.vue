<template>
  <div id="app">
    <router-view class="container" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  position: relative;
  height: 100%;
  overflow: hidden;
}

.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
