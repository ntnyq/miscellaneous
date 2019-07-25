import * as React from 'react'

import Child from './Child'

class App extends React.Component<{}, {}> {
  render () {
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}>
        <h1>Hello world</h1>
        <Child />
      </div>
    )
  }
}

export default App
