/*
describe('hello world', () => {
  it('runs this test', () => {
    expect(true).toBe(true)
    expect(!true).not.toBe(true)
  })
})
*/
import getShorts from './shorts'

describe('getShorts', () => {
  it('exists', () => {
    expect(getShorts).toBeDefined()
  })

  it('returns subarray with strings of given words count', () => {
    const input = [
      'lorem ipsum dolor sit amet',
      'lorem ipsum',
      'dolor sit amum',
      'ipsum',
    ]
    expect(getShorts(input, 2)).toEqual(['lorem ipsum', 'ipsum'])
  })
})
