import React from 'react'
import './style.scss'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { formatDate } from '../../utils/helpers'

function PostMetaInfo({ author, date, id, descendants }) {
  return (
    <div className="PostMetaInfo">
      by{' '}
      <Link to={`/user?id=${author}`} className="PostMetaInfo__link">
        {author}
      </Link>{' '}
      on {formatDate(date)} with{' '}
      {typeof descendants === 'number' && (
        <span>
          with{' '}
          <Link to={`/post?id=${id}`} className="PostMetaInfo__link">
            {descendants}
          </Link>{' '}
          {descendants !== 1 ? 'comments' : 'comment'}
        </span>
      )}
    </div>
  )
}

PostMetaInfo.propTypes = {
  author: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  descendants: PropTypes.number,
}

export default PostMetaInfo
