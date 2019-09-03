import Navbar from './main'

Navbar.install = Vue => {
  Vue.component(Navbar.name, Navbar)
}

export default Navbar
