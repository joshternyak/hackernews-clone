import React, { useState, useEffect } from 'react'
import './style.scss'
import queryString from 'query-string'
import PropTypes from 'prop-types'
import { formatDate } from '../../utils/helpers'
import { fetchUser, fetchPosts } from '../../utils/api'
import Loading from '../Loading'
import PostsList from '../Posts/PostsList'

function User({ location: { search } }) {
  const [user, setUser] = useState(null)
  const [loadingUser, setLoadingUser] = useState(true)
  const [posts, setPosts] = useState(null)
  const [loadingPosts, setLoadingPosts] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const { id } = queryString.parse(search)

    fetchUser(id)
      .then(user => {
        setUser(user)
        setLoadingUser(false)

        return fetchPosts(user.submitted.slice(0, 30))
      })
      .then(posts => {
        setPosts(posts)
        setLoadingPosts(false)
        setError(null)
      })
      .catch(({ message }) => {
        setError(message)
        setLoadingUser(false)
        setLoadingPosts(false)
      })
  }, [user, posts])

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div>
      {loadingUser === true ? (
        <Loading text="Fetching post" />
      ) : (
        <div>
          <h1 className="header">{user.id}</h1>
          <div className="meta-info-light">
            <span>
              joined <b>{formatDate(user.created)}</b>
            </span>
            <span>
              has <b>{user.karma.toLocaleString()}</b> karma
            </span>
          </div>
          <p dangerouslySetInnerHTML={{ __html: user.about }} />
        </div>
      )}
      {loadingPosts === true ? (
        loadingUser === false && <Loading text="Fetching posts" />
      ) : (
        <div>
          <h2>Posts</h2>
          <PostsList posts={posts} />
        </div>
      )}
    </div>
  )
}

export default User

User.propTypes = {
  location: PropTypes.object.isRequired,
}
