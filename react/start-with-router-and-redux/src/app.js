import React from 'react'
import ReactDom from 'react-dom'
import App from './views/App'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

const About = () => (
  <div>
    <div>
      <Link to="/">回到首页</Link>
    </div>
    <h2>关于页面</h2>
  </div>
)
const Users = () => (
  <div>
    <div>
      <Link to="/">回到首页</Link>
    </div>
    <h2>用户页面</h2>
  </div>
)

ReactDom.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/about" component={About} />
        <Route path="/users" component={Users} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
)
