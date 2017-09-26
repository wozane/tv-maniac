export default function getStats(arr = []) {
  return arr.reduce((tally, fruit) => {
    tally[fruit] = (tally[fruit] || 0) + 1
    //Object.assign({}, tally, { [fruit]: tally[fruit] + 1 })
    return tally
  }, {})
}
