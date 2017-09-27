import React from 'react'
import { get } from 'lodash'

const TvPoster = (props) => {
  const placeholder = 'https://www.fillmurray.com/200/300'
  const size = {
    md: 'medium',
    lg: 'original',
  }[props.size || 'md']

  const url = get(props, `show.image.${size}`, placeholder)

  return (
    <div>
      <img src={url} alt="" />
      <div className="subtitle">{props.show.name}</div>
    </div>)
}

export default TvPoster
