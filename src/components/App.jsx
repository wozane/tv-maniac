import React from 'react'
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

export default App
