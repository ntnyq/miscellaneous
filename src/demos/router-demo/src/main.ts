import { RouterClass } from './plugins/router'

RouterClass.init()

const view = document.querySelector('#router_view')
const renderView = (html: string) => {
  view.innerHTML = html
}

window.Router.route('/', () => renderView('默认页面'))
window.Router.route('/page1', () => renderView('This is page1'))
window.Router.route('/page2', () => renderView('This is page2'))
