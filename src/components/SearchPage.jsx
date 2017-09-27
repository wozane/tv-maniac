import axios from 'axios'

import React from 'react'
import Search from './Search'

class SearchPage extends React.Component {
  constructor() {
    super()
    this.state = {
      shows: [],
    }
  }

  componentDidMount() {
    this.handleSearch('flash')
  }

  handleSearch = (query) => {
    const apiUrl = `http://api.tvmaze.com/search/shows?q=${query}`
    axios.get(apiUrl).then((resp) => {
      const shows = resp.data.map(({ show }) => show)
      this.setState({ shows })
    })
  }

  render() {
    const shows = this.state.shows.map(show => (
      <div key={show.id} className="column is-3">
        <TvPoster show={show} size="md" />
        <TvPoster show={show} size="lg" />
        <TvPoster show={show} /> => <TvPoster show={show} size="md" />
        <img src={show.image.medium} alt="" />
        <h2 className="subtitle">{ show.name }</h2>
      </div>
    ))

    return (<div>
      <Search onSubmit={this.handleSearch} />
      <section className="columns is-multiline">
        {shows}
      </section>
    </div>)
  }
}
export default SearchPage
