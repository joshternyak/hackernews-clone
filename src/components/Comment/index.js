import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import PostMetaInfo from '../PostMetaInfo'

function Comment({ comment }) {
  return (
    <div className="Comment">
      <PostMetaInfo by={comment.by} time={comment.time} id={comment.id} />
      <p className="Comment__text" dangerouslySetInnerHTML={{ __html: comment.text }} />
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.any,
}

export default Comment
