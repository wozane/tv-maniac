// [......] => [******]     :.map()
// [......] => [....]       :.filter
// [......] => .            :.find()  - jeden element z tablicy 
// [......] () => {}        :.forEach
// [......] => true|false   :.some()   /.every() -- wartość boolowska
// [2,3,4].reduce((acc, item) => acc + item, 0)


export default function getShorts(text, worldlimit) {
  return text.filter(item => item.split(' ').length <= worldlimit)
  /*
  const result = []
  for (let i = 0; i < text.length; i++) {
    if (text[i].split(' ').length <= worldlimit) {
      result.push(text[i])
    }
  }
  return result
  */
}
