describe('Calculator', () => {
  let item;
  beforeEach(() => {
    item = new Object()
  })
  it('adds numbers', () => {
    item.value = 10
    expect(item.value).toBe(10)
  })

  describe('#add', () => {
    beforeEach(() => {
      item = new Object()
    })

    it('adds numbers', () => {
      item.value = 10
      expect(item.value).toBe(10)
    })
    
    it('multiplies numbers', () => {
      item.value = 12
      expect(item.value).toBe(12)
    })
  })

})