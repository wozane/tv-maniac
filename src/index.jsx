import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
// import search from './actions'
import App from './components/App'

import './styles.scss'

const store = createStore(rootReducer)

/* 
store.subscribe(() => console.log(store.getState()))
store.dispatch(search('ABC'))
store.dispatch(search('foobar'))
setTimeout(() => store.dispatch(search('Lorem ipsum')), 1000)
*/

// ReactDOM.render(App({message: 'Hello from ReactDOM'}), document.getElementById('app'))
ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('app'))
