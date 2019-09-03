<template>
  <div class="radio-buttons">
    <GRadioButtons
      @value-change="radioChange"
      :value.sync="month"
      :data="months"
    />
  </div>
</template>

<script>
import GRadioButtons from '@/components/RadioButtons'

const months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']

export default {
  name: 'RadioButtons',

  components: { GRadioButtons },

  data () {
    return {
      month: '五月',
      months
    }
  },

  methods: {
    radioChange (text) {
      console.log(text)
    }
  }
}
</script>

<style lang="scss">
.radio-buttons {
  .g-radio-buttons {
    text-align: center;
  }
}
</style>
