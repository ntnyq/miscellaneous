import Vue from 'vue'
import ToastComponent from './Toast'

const ToastConstructor = Vue.extend(ToastComponent)

function showToast({ text, type, duration = 10000 }) {
  // const toastCtor = new ToastConstructor({
  //   el: document.createElement('div'),
  //   data () {
  //     return {
  //       isShow: true,
  //       text,
  //       type
  //     }
  //   }
  // })
  const toastCtor = new ToastConstructor({
    data() {
      return {
        isShow: true,
        text,
        type,
      }
    },
  }).$mount()

  document.body.appendChild(toastCtor.$el)
  setTimeout(() => {
    toastCtor.isShow = false
  }, duration)
}

function install(Vue) {
  Vue.prototype.$toast = showToast
}

export default install
