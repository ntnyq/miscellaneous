<template>
  <div class="home">
    <h1>This is page Home</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',

  created() {
    console.log(this._root)
  },
}
</script>
