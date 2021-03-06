import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import SearchPage from './SearchPage'
import Contact from './Contact'

const menuItems = [
  { label: 'Home', to: '/', exact: true },
  { label: 'Search', to: '/tv' },
  { label: 'Contact', to: '/contact' },
]

const App = () => (<BrowserRouter>
  <div>
    <Header items={menuItems} />
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

export default App
