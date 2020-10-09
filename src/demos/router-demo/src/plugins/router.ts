interface RouterClass {
  routes: { [key: string]: any }
  currentUrl: string
}

declare global {
  interface Window {
    Router: RouterClass
  }
}

class RouterClass {
  constructor() {
    this.routes = {}
    this.currentUrl = ''
    window.addEventListener('load', () => this.render())
    window.addEventListener('hashchange', () => this.render())
  }

  static init() {
    window.Router = new RouterClass()
  }

  route(path: string, cb: () => void) {
    this.routes[path] = cb || function () {}
  }

  render() {
    this.currentUrl = location.hash.slice(1) || '/'
    typeof this.routes[this.currentUrl] === 'function' &&
      this.routes[this.currentUrl]()
  }
}

export { RouterClass }
