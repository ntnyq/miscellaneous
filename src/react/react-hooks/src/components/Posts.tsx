import * as React from 'react'

interface Post {
  id: number
  title: string
  userId: number
  body: string
}

interface PostsProps {
  posts: Post[]
  loading: boolean
}

const Posts: React.FC<PostsProps> = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <ul className='list-group mb-4'>
      {posts.map(post => (
        <li className='list-group-item mb-2' key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  )
}

export default Posts
