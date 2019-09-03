<template>
  <div id="app">
    <goy-navbar :data="menu" />
    <router-view id="main" />
  </div>
</template>

<script>
import menu from './constants/menu';

export default {
  name: 'App',
  data () {
    return {
      menu
    };
  }
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: url(./assets/bg.jpeg) no-repeat center fixed;
  background-size: cover;
  overflow: hidden;
}

#main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  padding: .3rem;

  h2 {
    max-width: 80%;
    margin: 0 auto .1rem;
    background: linear-gradient(to bottom, #333, #fff);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 0.5rem;
  }
}
</style>
