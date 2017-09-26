import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'

const App = props => (<div title="My Div">
  <Header />
  <h1>{props.message}</h1>
</div>)

App.propTypes = {
  message: PropTypes.string,
}

App.defaultProps = {
  message: 'no data',
}

export default App
