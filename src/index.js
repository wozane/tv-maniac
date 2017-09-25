import { createElement } from 'react'
import ReactDOM from 'react-dom'

const App = props => createElement(
  'div',
  {title: 'My Div'},
  createElement(
    'h1',
    null,
    props.message,
  )
)

ReactDOM.render(App({ message: 'Hello from ReactDOM' }), document.getElementById('app'))

// <dev><h1></h1></dev>
