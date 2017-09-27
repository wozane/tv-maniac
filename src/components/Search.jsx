import React from 'react'
import PropTypes from 'prop-types'


class Search extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  constructor() {
    super()
    this.state = {
      query: '',
    }
  }

  handleChange = (event) => {
    this.setState({ query: event.target.value })
  }

  handleClick = (event) => {
    this.setState({ query: '' })
    this.props.onSubmit(this.state.query)
    event.preventDefault()
  }

  render() {
    return (
      <form className="field has-addons">
        <div className="control" >
          <input
            type="search"
            value={this.state.query}
            className="input"
            onChange={this.handleChange}
          />
        </div>
        <div className="control">
          <button className="button is-primary" onClick={this.handleClick}>
            search
          </button>
        </div>
      </form>
    )
  }
}

/*
const Search = () => (<form className="field has-addons">
  <div className="control" >
    <input type="search" className="input" />
  </div>
  <div className="control">
    <button className="button is-primary">
      search
    </button>
  </div>
</form>)
*/
export default Search
