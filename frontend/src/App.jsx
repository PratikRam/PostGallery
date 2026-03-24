import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import AllPost from './pages/AllPost'

const App = () => {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<CreatePost />} />
        <Route path='/allpost' element={<AllPost />} />
      </Routes>
    </div>
  )
}

export default App
