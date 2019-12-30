<template>
  <div class="app-layout">
    <div class="app-sidebar">
      1
    </div>
    <div class="app-main">
      <transition
        name="el-fade-linear"
        mode="out-in"
      >
        <router-view :key="$route.fullPath" />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
}
</script>
