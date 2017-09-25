import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const App = props => (<div title="My Div">
  <h1>{props.message}</h1>
</div>)

App.propTypes = {
  message: PropTypes.string,
}

App.defaultProps = {
  message: 'no data',
}

//ReactDOM.render(App({message: 'Hello from ReactDOM'}), document.getElementById('app'))
ReactDOM.render(<App />, document.getElementById('app'))

// <dev><h1></h1></dev>
