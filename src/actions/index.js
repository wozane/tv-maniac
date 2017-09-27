export const SEARCH_RUN = 'SEARCH_RUN'

export function search(query) {
  return {
    type: SEARCH_RUN,
    payload: query,
  }
}
