import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

import PropTypes from "prop-types";


function Blogs({handleBookmarks,handleRead}) {


    const [blogs,setBlogs]=useState([])

useEffect(()=>{

    fetch('blog.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data));
},[])


    return (
        <div className="md:w-2/3">
            <h1 className="text-3xl">Blogs:{blogs.length}</h1>
            {
                blogs.map(blog=><Blog 
                    key={blog.id} 
                    blog={blog}
                    handleBookmarks={handleBookmarks}
                    handleRead={handleRead}
                    ></Blog>)
            }
        </div>
    );

    }

    Blogs.propTypes ={
        handleBookmarks:PropTypes.func,
        handleRead:PropTypes.func

    }
export default Blogs