import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from './App'
import { Provider } from './store'

const rootEl = document.getElementById('root')

ReactDOM.render((
  <Provider>
    <App />
  </Provider>
), rootEl)
