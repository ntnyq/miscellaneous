import Navbar from './navbar'
import Icon from './icon'
import FormBox from './form-box'

const components = [Navbar, Icon, FormBox]

const install = (Vue, opt = {}) => {
  if (install.installed) {
    // install自身就是一个组件
    return
  }

  // Vue.use(///)  // 注册全局方法
  components.map(component => {
    Vue.component(component.name, component)
  })
}

const component = {
  install,
  Navbar,
  Icon,
  FormBox,
}

export default component
