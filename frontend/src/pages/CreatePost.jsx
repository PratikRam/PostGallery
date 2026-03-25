import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CreatePost = () => {
  const navigate = useNavigate()
  function AllPostHandler () {
    navigate('/allpost')
  }

  function SubmitHandler (e) {
    e.preventDefault()
    const formData = new FormData(e.target)

    const image = formData.get('image')
    const caption = formData.get('caption')

    // ✅ Proper validation for image file
    if (!image || image.size === 0) {
      alert('Please select an image')
      return
    }
    if (!caption || caption.trim() === '') {
      alert('Please enter a caption')
      return
    }

    axios.post('http://localhost:3000/create-post', formData).then(response => {
      response.data
      navigate('./allpost')
    })

    // const formData = new FormData(e.target)
    // const imageFile = formData.get('image')
    // const caption = formData.get('caption')

    // const data = new FormData()
    // data.append('image', imageFile)
    // data.append('caption', caption)

    // axios
    //   .post('http://localhost:3000/create-post', data)
    //   .then(response => {
    //     console.log(response.data)
    //     navigate('/allpost')
    //   })
    //   .catch(error => {
    //     console.error('Error creating post:', error)
    //   })
  }

  return (
    <div className='min-h-screen bg-gray-700 flex items-center justify-center p-4'>
      <section className='bg-white rounded-lg shadow-2xl p-8 w-full max-w-md'>
        <div className='flex flex-row justify-between'>
          <h2 className='text-2xl font-bold text-center text-gray-800 mb-8'>
            Create Post
          </h2>
          <h2
            className=' bg-sky-500 text-white font-bold rounded-lg hover:bg-sky-600 transition-all duration-200 transform hover:-translate-y-0.5 w-fit p-2 h-10 cursor-pointer'
            onClick={AllPostHandler}
          >
            See all Posts
          </h2>
        </div>
        <form className='space-y-6' onSubmit={SubmitHandler}>
          <div className='flex flex-col'>
            <label
              htmlFor='image'
              className='text-sm font-semibold text-gray-700 mb-2'
            >
              Select Image
            </label>
            <input
              type='file'
              id='image'
              name='image'
              accept='image/*'
              className='px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 cursor-pointer'
            />
          </div>
          <div className='flex flex-col'>
            <label
              htmlFor='caption'
              className='text-sm font-semibold text-gray-700 mb-2'
            >
              Caption
            </label>
            <input
              type='text'
              id='caption'
              name='caption'
              placeholder='Write a caption...'
              className='px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
            />
          </div>
          <button
            type='submit'
            className='w-full bg-sky-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-sky-600 transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg cursor-pointer'
          >
            Create Post
          </button>
        </form>
      </section>
    </div>
  )
}

export default CreatePost
