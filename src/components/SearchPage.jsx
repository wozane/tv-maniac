import React from 'react'
import Search from './Search'

const SearchPage = () => (<div>
  <Search onSubmit={e => console.log(e)} />
</div>)

export default SearchPage
