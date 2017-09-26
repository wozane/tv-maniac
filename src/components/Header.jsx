import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const items = [
    { label: 'Home', to: '/', exact:true },
    { label: 'Search', to: '/tv' },
    { label: 'Contact', to: '/contact' },
  ].map(item => ( 
    <NavLink {...item} key={item.label} activeClassName="is-active" className="navbar-item is-tab">
      {item.label}
    </NavLink>),
  )

  return (<nav className="navbar is-primary has-shadow">
    <div className="navbar-menu container">
      <div className="navbar-start" >
        {items}
      </div>
    </div>
  </nav>)
}

export default Header
