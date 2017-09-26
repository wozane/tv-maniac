import React from 'react'
import { mount } from 'enzyme'

import Search from './Search'


describe('<Search />', () => {
  let search
  beforeEach(() => {
    search = mount(<Search />)
  })
  it('has input and button', () => {
    expect(search.find('input').exists()).toBe(true)
  })

  it('updates statewhen input changes', () => {

  })
})
