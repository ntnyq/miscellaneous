<template>
  <div id="app">
    <button
      @click="showToast"
      type="button"
    >
      Show Toast
    </button>
  </div>
</template>

<script>
export default {
  name: 'App',

  methods: {
    showToast () {
      this.$toast({
        type: 'success',
        text: 'Hello world'
      })
    }
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

button {
  padding: 0.6em 1.4em;
  appearance: none;
  box-shadow: none;
  background-color: green;
  border: 1px solid green;
  border-radius: 0.3em;
  font-weight: 500;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  outline: none;
}
</style>
