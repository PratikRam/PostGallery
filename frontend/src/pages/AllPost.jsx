import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AllPost = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/get-posts')
      .then(response => {
        setPosts(response.data.posts)
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching posts:', error)
      })
  }, [])

  return (
    <div className='flex h-30 w-50 flex-wrap flex-row gap-4 p-4'>
      {posts.map(post => (
        <div key={post._id} className='mb-4'>
          <img
            src={post.Image}
            alt={post.caption}
            className='w-full h-auto rounded-lg'
          />
          <p className='mt-2 text-gray-700'>{post.caption}</p>
        </div>
      ))}
    </div>
  )
}

export default AllPost
