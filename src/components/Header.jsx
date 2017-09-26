import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  const items = props.items.map(item => (
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

Header.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    exact: PropTypes.bool,
  })).isRequired,
}

export default Header
