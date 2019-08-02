<template>
  <div
    v-if="isShow"
    :class="['v-toast', `is-${type}`]"
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'VToast'
}
</script>

<style lang="scss">
.v-toast {
  position: fixed;
  left: 50%;
  top: 50%;
  padding: 10px;
  background-color: #ccc;
  border-radius: 4px;
  transform: translate(-50%, -50%);
  color: #fff;

  &.is-info {
    background-color: #0ae;
  }

  &.is-success {
    background-color: #00ee6b;
  }

  &.is-warning {
    background-color: #eea300;
  }

  &.is-danger {
    background-color: #ee000c;
  }
}
</style>
