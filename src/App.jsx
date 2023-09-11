
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import { useEffect, useState } from 'react'

function App() {

  const [ bookmarks,setBookmarks]=useState([])

  const handleBookmarks=blog=>{

    const newBookmark=[...bookmarks,blog]
    setBookmarks(newBookmark)

  }

  return (
    <>
      <Header></Header>
      <div className='md:flex '>
      <Blogs 
      handleBookmarks={handleBookmarks}
      ></Blogs>
      <BookMarks bookmarks={bookmarks}></BookMarks>
      </div>
     
     
    </>
  )
}

export default App
