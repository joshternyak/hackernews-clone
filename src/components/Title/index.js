import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import { Link } from 'react-router-dom'

function Title({ url, title, id }) {
  return url ? (
    <a href={url} className="Title">
      {title}
    </a>
  ) : (
    <Link className="Title" to={`/post?id=${id}`}>
      {title}
    </Link>
  )
}

Title.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}

export default Title
