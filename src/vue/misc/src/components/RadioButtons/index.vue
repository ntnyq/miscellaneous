<template>
  <div class="g-radio-buttons">
    <label
      v-for="(item, index) in data"
      :key="index"
      :for="item"
      class="radio-button"
    >
      <input
        @change="selectChange(item)"
        :checked="item === value"
        type="radio"
        :name="name"
        :id="item"
      >
      <span class="radio-button-text">
        {{ item }}
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'GRadioButtons',

  props: {
    value: {
      type: String,
      default: ''
    },

    data: {
      type: Array,
      default: () => []
    },

    name: {
      type: String,
      default: () => Math.random().toString(16).slice(2, 14)
    }
  },

  methods: {
    selectChange (text) {
      this.$emit('update:value', text)
      this.$emit('value-change', text)
    }
  }
}
</script>

<style lang="scss">
$primary-color: #409eff;

.g-radio-buttons {
  position: relative;
  line-height: 1;
  font-size: 0;

  .radio-button {
    position: relative;
    display: inline-block;
    margin: 8px;
    cursor: pointer;

    & > input[type="radio"] {
      display: none;

      &:checked + .radio-button-text {
        border-color: $primary-color;
        background-color: $primary-color;
        color: #fff;
      }
    }

    &-text {
      display: inline-block;
      min-width: 60px;
      padding: 8px 12px;
      line-height: 1;
      background-color: #fff;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      white-space: nowrap;
      vertical-align: middle;
      text-align: center;
      font-weight: 500;
      font-size: 14px;
      color: #666;
      overflow: visible;
    }
  }
}
</style>
