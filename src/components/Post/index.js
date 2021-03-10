import React, { useState, useEffect } from 'react'
import './style.scss'
import queryString from 'query-string'
import PropTypes from 'prop-types'
import { fetchItem, fetchPosts, fetchComments } from '../../utils/api'
import Loading from '../Loading'
import PostMetaInfo from '../PostMetaInfo'
import Title from '../Title'
import Comment from '../Comment'

function Post({ location: { search } }) {
  const [post, setPost] = useState(null)
  const [loadingPost, setLoadingPost] = useState(true)
  const [comments, setComments] = useState(null)
  const [loadingComments, setLoadingComments] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const { id } = queryString.parse(search)

    fetchItem(id)
      .then(post => {
        setPost(post)
        setLoadingPost(false)

        return fetchComments(post.kids || [])
      })
      .then(comments => {
        setComments(comments)
        setLoadingComments(false)
      })
      .catch(({ message }) => {
        setError(message)
        setLoadingPost(false)
        setLoadingComments(false)
      })
  }, [post, comments])

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div>
      {loadingPost === true ? (
        <Loading text="Fetching post" />
      ) : (
        <div>
          <h1 className="header">
            <Title url={post.url} title={post.title} id={post.id} />
          </h1>
          <PostMetaInfo
            author={post.by}
            date={post.time}
            id={post.id}
            descendants={post.descendants}
          />
          <p dangerouslySetInnerHTML={{ __html: post.text }} />
        </div>
      )}
      {loadingComments === true ? (
        loadingPost === false && <Loading />
      ) : (
        <div>
          {comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Post

Post.propTypes = {
  location: PropTypes.object.isRequired,
}
