<template>
  <div class="icons-container">
    <h1>项目图标快捷预览</h1>
    <div class="icons-wrapper">
      <div v-for="(icon, index) in icons"
        :key="index">
        <el-tooltip placement="top">
          <div slot="content">{{ generateIconCode(icon) }}</div>
          <div v-clipboard:copy="generateIconCode(icon)"
            v-clipboard:success="handleCopySuccess"
            class="icon-item">
            <svg-icon :icon-class="icon"
              class-name="disabled" />
            <span>{{ icon }}</span>
          </div>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
import icons from './helper'

export default {
  name: 'Icons',

  data () {
    return {
      icons
    }
  },

  methods: {
    generateIconCode (symbol) {
      return `<svg-icon icon-class="${symbol}" />`
    },

    handleCopySuccess () {
      this.$message.success('图标复制成功，快去使用吧！')
    }
  }
}
</script>

<style lang="scss" scoped>
.icons-container {
  position: relative;

  h1 {
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 50px;
    text-align: center;
  }

  .icons-wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 960px;
    margin: 0 auto;
  }

  .icon-item {
    width: 110px;
    height: 110px;
    margin: 20px;
    font-size: 30px;
    color: #333;
    text-align: center;
    cursor: pointer;

    span {
      display: block;
      margin-top: 10px;
      font-size: 20px;
    }
  }
}
</style>
