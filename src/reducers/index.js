import { combineReducers } from 'redux'
import { SEARCH_RUN, FETCH_SHOWS } from '../actions'

function searchQuery(state = '', action) {
  if (action.type === SEARCH_RUN) {
    return action.payload
  }
  return state
}

function fetchShows(state = [], action) {
  if (action.type === FETCH_SHOWS) {
    return action.payload.data.map(({ show }) => show)
  }
  return state
}

const rootReducer = combineReducers({
  search: searchQuery,
  shows: fetchShows,
})

export default rootReducer

/*
{
  searchQuery: 'foobar',
  shows: [{}, {}]
}
*/
