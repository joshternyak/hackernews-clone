import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

function Title({ url, title }) {
  return (
    <a className="Title" href={url}>
      {title}
    </a>
  )
}

Title.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Title
