import React from 'react'
import './style.scss'
import PropTypes from 'prop-types'

function PostMetaInfo({ author, date, comments }) {
  return (
    <div className="PostMetaInfo">
      by{' '}
      <a href="#" className="PostMetaInfo__link">
        {author}
      </a>{' '}
      on {date} with{' '}
      <a href="#" className="PostMetaInfo__link">
        {comments}
      </a>{' '}
      comments
    </div>
  )
}

PostMetaInfo.propTypes = {
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  comments: PropTypes.number.isRequired,
}

export default PostMetaInfo
