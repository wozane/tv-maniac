import axios from 'axios'

import React from 'react'
import Search from './Search'

class SearchPage extends React.Component {
  handleSearch = (query) => {
    const apiUrl = `http://api.tvmaze.com/search/shows?q=${query}`
    axios.get(apiUrl).then(console.log)
  }

  render() {
    return (<div>
      <Search onSubmit={this.handleSearch} />
    </div>)
  }
}
export default SearchPage
