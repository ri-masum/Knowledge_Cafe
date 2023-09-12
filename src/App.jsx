
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import {  useState } from 'react'

function App() {

  const [ bookmarks,setBookmarks]=useState([])
  const [reads,setRead]=useState(0)

  const handleBookmarks=(blog)=>{

    const newBookmark=[...bookmarks,blog]
    setBookmarks(newBookmark)



  }
  const handleRead=(read,id)=>{
    const newRead=reads+read;
    setRead(newRead)
    // console.log('removed ',id);
    const remainingBookmarks=bookmarks.filter(bookmark=>bookmark.id !==id);
    setBookmarks(remainingBookmarks);

  }

  return (
    <>
      <Header></Header>
      <div className='md:flex '>
      <Blogs 
      handleBookmarks={handleBookmarks}
      handleRead={handleRead}
      ></Blogs>
      <BookMarks bookmarks={bookmarks}
      reads={reads}
      
      ></BookMarks>
      </div>
     
     
    </>
  )
}

export default App
