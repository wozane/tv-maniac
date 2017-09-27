import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
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
        <span>{props.searchQuery.length}</span>
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

function mapStateToProps(state) {
  return {
    searchQuery: state.search,
  }
}

export default connect(mapStateToProps)(Header)
