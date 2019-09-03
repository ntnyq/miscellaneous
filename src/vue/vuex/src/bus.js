import Vue from 'vue'

const bus = new Vue()

const state = {
  num: 1,
}

bus.$on('log', () => {
  console.log('state.num:', state.num)
})

bus.$on('add', num => {
  state.num += num
  bus.$emit('log')
})

bus.$on('sub', num => {
  state.num -= num
  bus.$emit('log')
})

export default bus
