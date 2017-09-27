export default function async({ dispatch }) {
  return next => (action) => {
    if (!action.payload || !action.payload.then) {
      return next(action)
    }
    return action.payload.then((response) => {
      dispatch({
        type: action.type,
        payload: response,
      })
    })
  }
}
