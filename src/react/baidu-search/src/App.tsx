import * as React from 'react'

import Search from './Search'

class App extends React.Component {
  render () {
    return (
      <div className='app-wrap'>
        <h1 className='text-center p-4'>搜索一下</h1>
        <Search />
      </div>
    )
  }
}

export default App
