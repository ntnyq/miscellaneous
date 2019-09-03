import * as React from 'react'

import { Store } from './store'

class Child extends React.Component {
  render () {
    return (
      <Store.Consumer>
        {(context) => {
          return (
            <React.Fragment>
              <p>
                Current value is <strong>{context.state.counter}</strong>
              </p>
              <button onClick={() => {
                context.increase()
              }} type='button'>Add 👍</button>
            </React.Fragment>
          )
        }}
      </Store.Consumer>
    )
  }
}

export default Child
