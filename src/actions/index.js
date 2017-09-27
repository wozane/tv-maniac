import axios from 'axios'

export const SEARCH_RUN = 'SEARCH_RUN'

export function search(query) {
  return {
    type: SEARCH_RUN,
    payload: query,
  }
}

export const FETCH_SHOWS = 'FETCH_SHOWS'

export function fetchShows(query) {
  const apiUrl = `http://api.tvmaze.com/search/shows?q=${query}`
  const request = axios.get(apiUrl)
  return {
    type: FETCH_SHOWS,
    payload: request,
  }
}
