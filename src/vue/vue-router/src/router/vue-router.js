/**
 * @module VueRouter
 * @see https://juejin.im/post/6854573222231605256
 */

let _Vue = null

class HistoryRoute {
  constructor() {
    this.current = null
  }
}

class VueRouter {
  constructor(options = {}) {
    this.mode = options.mode || 'hash'
    this.routes = options.routes || []

    this.routesMap = this.createMap(this.routes)
    this.history = new HistoryRoute()

    this.init()
  }

  init() {
    if (this.mode === 'hash') {
      location.hash ? '' : (location.hash = '/')

      window.addEventListener('load', () => {
        this.history.current = location.hash.slice(1)
      })

      window.addEventListener('hashchange', () => {
        this.history.current = location.hash.slice(1)
      })
    }

    if (this.mode === 'history') {
      location.pathname ? '' : (location.pathname = '/')

      window.addEventListener('load', () => {
        this.history.current = location.pathname
      })

      window.addEventListener('popstate', () => {
        this.history.current = location.pathname
      })
    }
  }

  createMap(routes) {
    return routes.reduce((prev, current) => {
      prev[current.path] = current.component
      return prev
    }, {})
  }

  static install(Vue) {
    _Vue = Vue

    Vue.component('RouterLink', {
      props: {
        to: {
          type: String,
          required: true,
        },
      },
      render(h) {
        // this._self refs to component instance
        let mode = this._self._root._router.mode
        let to = mode === 'hash' ? `#${this.to}` : this.to
        return h('a', { attrs: { href: to } }, this.$slots.default)
      },
    })

    Vue.component('RouterView', {
      render(h) {
        let current = this._self._root._router.history.current
        let routeMap = this._self._root._router.routesMap

        return h(routeMap[current])
      },
    })

    Vue.mixin({
      // $options haven't initialized yet
      beforeCreate() {
        if (this.$options && this.$options.router) {
          this._root = this
          this._router = this.$options.router

          Vue.util.defineReactive(this, 'xxx', this._router.history)
        } else {
          this._root = this.$parent && this.$parent._root
        }

        Object.defineProperty(this, '$router', {
          get() {
            return this._root._router
          },
        })

        Object.defineProperty(this, '$route', {
          get() {
            return this._root._router.current
          },
        })
      },
    })
  }
}

export default VueRouter
