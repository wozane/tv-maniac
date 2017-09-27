import React from 'react'
import axios from 'axios'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { search } from '../actions'
import Search from './Search'
import TvPoster from './TvPoster'

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
    this.props.search(query)

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

export default connect(null, { search })(SearchPage)
