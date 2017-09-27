import React from 'react'
import { mount } from 'enzyme'
import TvPoster from './TvPoster'

describe('<TvPoster />', () => {
  it('displays show\'s name in .subtitle', () => {
    const show = { name: 'ABC Show', image: { medium: '', original: '' } }
    const tvPoster = mount(<TvPoster show={show} />)
    console.log(tvPoster.debug())
    expect(tvPoster.find('.subtitle').length).toBe(1)
    // expect(tvPoster.find('img').prop('src').exists()).toBe(true)
  })

  describe('sets image\'s src attr ', () => {
    let show

    beforeEach(() => {
      show = { image: { medium: 'http://medium.url.jpg', original: 'http://original.url.jpg' } }
    })

    it('to the value of `show.image.medium` when size is "md"', () => {
      const tvPoster = mount(<TvPoster show={show} size="md" />)
      expect(tvPoster.find('img').prop('src')).toBe('http://medium.url.jpg')
    })

    it('to the value of `show.image.original` when size is "lg"', () => {
      const tvPoster = mount(<TvPoster show={show} size="lg" />)
      expect(tvPoster.find('img').prop('src')).toBe('http://original.url.jpg')
    })

    it('to the value of `show.image.medium` when no size provided', () => {
      const tvPoster = mount(<TvPoster show={show} />)
      expect(tvPoster.find('img').prop('src')).toBe('http://medium.url.jpg')
    })

    it('placeholder when show has no ".image"', () => {
      const showWithNoImage = {}
      const tvPoster = mount(<TvPoster show={showWithNoImage} />)
      expect(tvPoster.find('img').prop('src')).toBe('https://www.fillmurray.com/200/300')
    })

    it('placeholder when show has no ".image.medium"', () => {
      const showWithNoImage = { image: {} }
      const tvPoster = mount(<TvPoster show={showWithNoImage} />)
      expect(tvPoster.find('img').prop('src')).toBe('https://www.fillmurray.com/200/300')
    })
  })
})
