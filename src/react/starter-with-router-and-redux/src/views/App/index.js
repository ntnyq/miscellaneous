import React from 'react'
import { connect } from 'react-redux'
import { increment } from '../../actions/index'
import { Link } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  onClick() {
    this.props.dispatch(increment())
  }
  onClick2() {
    this.props.dispatch({ type: 'INCREMENT_ASYNC' })
  }

  render() {
    return (
      <div>
        <h2>React Demo</h2>
        <nav>
          <ul>
            <li>
              <Link to='/about'>页面1</Link>
            </li>
            <li>
              <Link to='/users'>页面2</Link>
            </li>
          </ul>
        </nav>
        <div>
          current number: {this.props.number}{' '}
          <button onClick={() => this.onClick()}>点击+1</button>
        </div>
        <div>
          current number: {this.props.number}{' '}
          <button onClick={() => this.onClick2()}>点击2秒后+1</button>
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  number: state.number,
}))(App)
