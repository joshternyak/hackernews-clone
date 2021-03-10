import React, { useState } from 'react'
import './style.scss'
import PropTypes from 'prop-types'
import PostsList from './PostsList'
import Loading from '../Loading'
import { fetchMainPosts } from '../../utils/api'

function Posts({ type }) {
  const [posts, setPosts] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  function handleFetch() {
    setPosts(null)
    setError(null)
    setLoading(true)
  }

  fetchMainPosts(type)
    .then(posts => {
      setPosts(posts)
      setError(false)
      setLoading(false)
    })
    .catch(({ message }) => {
      setError(message)
      setLoading(false)
    })

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <div>{error}</div>
  }

  return <PostsList posts={posts} />
}

export default Posts

Posts.propTypes = {
  type: PropTypes.oneOf(['top', 'new']).isRequired,
}
