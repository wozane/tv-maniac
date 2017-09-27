import React from 'react'
// import axios from 'axios'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Search from './Search'
import TvPoster from './TvPoster'

class SearchPage extends React.Component {
  componentDidMount() {
    this.handleSearch('flash')
  }

  handleSearch = (query) => {
    this.props.search(query)
    this.props.fetchShows(query)
  }

  render() {
    const shows = this.props.shows.map(show => (
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
function mapStateToProps(state) {
  return {
    shows: state.shows,
  }
}

export default connect(mapStateToProps, actions)(SearchPage)
