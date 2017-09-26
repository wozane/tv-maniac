import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import SearchPage from './SearchPage'
import Contact from './Contact'

const App = () => (<BrowserRouter>
  <div>
    <Header />
    <main className="container">
      <Switch> {/* first match will work */}
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/tv/:id" render={() => <div>More dynamic!</div>} /> */}
        <Route path="/tv" component={SearchPage} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </main>
  </div>
</BrowserRouter>)
/*
App.propTypes = {
  message: PropTypes.string,
}

App.defaultProps = {
  message: 'no data',
}
*/
export default App
