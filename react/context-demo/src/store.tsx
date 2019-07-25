import * as React from 'react'

const Store = React.createContext({
  state: {
    counter: 0
  },
  increase () { }
})

class Provider extends React.Component {
  state = {
    counter: 0
  }
  render () {
    return (
      <Store.Provider value={{
        state: this.state,
        increase: () => this.setState({
          counter: this.state.counter + 1
        })
      }}>
        {this.props.children}
      </Store.Provider>
    )
  }
}

export {
  Store,
  Provider
}
