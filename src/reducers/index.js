import { combineReducers } from 'redux'
import { SEARCH_RUN } from '../actions'

function searchQuery(state = '', action) {
  if (action.type === SEARCH_RUN) {
    return action.payload
  }
  return state
}

const rootReducer = combineReducers({
  search: searchQuery,
  shows: () => [],
})

export default rootReducer

/*
{
  searchQuery: 'foobar',
  shows: [{}, {}]
}
*/
