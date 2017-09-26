import React from 'react'
import { mount } from 'enzyme'

import Search from './Search'


describe('<Search />', () => {
  let search
  beforeEach(() => {
    search = mount(<Search />)
  })
  it('has input and button', () => {
    expect(search.find('input[type="search"]').exists()).toBe(true)
    expect(search.find('button').is('.button')).toBe(true)
    expect(search.find('button').text()).toBe('search')
  })

  it('updates state when input changes', () => {
    search.find('input').simulate('change', {
      target: { value: 'zapytanie' },
    })
    expect(search.state().query).toBe('zapytanie')
  })

  it('clears input when button clicked', () => {
    search.find('input').simulate('change', {
      target: { value: 'zapytanie' },
    })
    search.find('button').simulate('click')
    expect(search.state().query).toBe('')
  })
  /*
  it('updates input text when input changes', () => {
    search.find('input').simulate('change', {
      target: { value: 'zapytanie' },
    })
    expect(search.find('input').value()).toBe('zapytanie')
  })
  */
})
