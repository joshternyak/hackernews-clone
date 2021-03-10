import React from 'react'
import '../style.scss'
import PropTypes from 'prop-types'
import Title from '../../Title'
import PostMetaInfo from '../../PostMetaInfo'

function PostsList({ posts }) {
  if (posts.length === 0) {
    return <div>This user hasn't posted yet.</div>
  }
  return (
    <ul className="PostsList">
      {posts.map((post, index) => {
        return (
          <li key={post.id} className="PostsList__post">
            <Title url={post.url} title={post.title} id={post.id} />
            <PostMetaInfo
              author={post.by}
              date={post.time}
              id={post.id}
              descendants={post.descendants}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default PostsList

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
}
