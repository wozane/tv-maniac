// input = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian', 'Czarna jagoda']

/**
 * 1. piszemy test
 *  - sprawdzenie czy jest pusta tablica
 *  - sprawdzenie czy wartosci sa undefine
 * 2. implementacja
 */

import getStats from './stats'

describe('#stats', () => {
  xit('checks that there is an array', () => {
  })

  xit('throws when called with no parm.', () => {
    expect(getStats()).toThrow()
  })

  it('returns empty object wihen given empty array', () => {
    expect(getStats([])).toEqual({})
  })

  it('returns correct stats', () => {
    const input = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian', 'Czarna jagoda']
    const expectedOutput = {
      Apple: 2, 
      Banana: 1, 
      Durian: 3,
      'Czarna jagoda': 1
    }
    expect(getStats(input)).toEqual(expectedOutput)
  })
})