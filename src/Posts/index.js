import React from 'react'
import './style.scss'
import Title from '../Title'
import PostMetaInfo from '../PostMetaInfo'

const posts = [
  {
    title: 'This is a post on Hacker news',
    url: '#',
    author: 'Josh Ternyak',
    date: '3/9/2021, 12:33 PM',
    comments: 49,
    id: 1,
  },
  {
    title: 'This is a post on Hacker news',
    url: '#',
    author: 'Josh Ternyak',
    date: '3/9/2021, 12:33 PM',
    comments: 49,
    id: 2,
  },
  {
    title: 'This is a post on Hacker news',
    url: '#',
    author: 'Josh Ternyak',
    date: '3/9/2021, 12:33 PM',
    comments: 49,
    id: 3,
  },
  {
    title: 'This is a post on Hacker news',
    url: '#',
    author: 'Josh Ternyak',
    date: '3/9/2021, 12:33 PM',
    comments: 49,
    id: 4,
  },
  {
    title: 'This is a post on Hacker news',
    url: '#',
    author: 'Josh Ternyak',
    date: '3/9/2021, 12:33 PM',
    comments: 49,
    id: 5,
  },
  {
    title: 'This is a post on Hacker news',
    url: '#',
    author: 'Josh Ternyak',
    date: '3/9/2021, 12:33 PM',
    comments: 49,
    id: 6,
  },
  {
    title: 'This is a post on Hacker news',
    url: '#',
    author: 'Josh Ternyak',
    date: '3/9/2021, 12:33 PM',
    comments: 49,
    id: 7,
  },
  {
    title: 'This is a post on Hacker news',
    url: '#',
    author: 'Josh Ternyak',
    date: '3/9/2021, 12:33 PM',
    comments: 49,
    id: 8,
  },
]

function Posts() {
  return (
    <ul className="Posts">
      {posts.map((post, index) => {
        return (
          <li key={post.id} className="Posts__post">
            <Title url={post.url} title={post.title} id={post.id} />
            <PostMetaInfo
              author={post.author}
              date={post.date}
              comments={post.comments}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default Posts
