import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

import "./Blog.css";
function Blog({ blog, handleBookmarks,handleRead }) {
  // console.log(blog);
  const {
    Title,
    coverImg,
    Author,
    AuthorImage,
    postedDate,
    readingTime,
    Hashtag,
    id
  } = blog;
  return (
    <div className="mt-10 bg-gray-200 rounded-lg p-4">
      <img src={coverImg} alt="Cover Image" />
      <div className="flex mt-6">
        <img className="img" src={AuthorImage} alt="auther" />

        <div className="flex justify-between">
          <div className="ml-5">
            <p className="text-2xl font-bold">{Author}</p>
            <p className="text-sm">{postedDate}</p>
          </div>
          <div className="flex">
            <p className="mt-3 mr-2">{readingTime} minute ago</p> 
            <button onClick={()=>handleBookmarks(blog)}>
              <FaBookmark></FaBookmark>
            </button>
          </div>
        </div>
      </div>
      <h2 className="text-3xl mt-5">{Title}</h2>
      <p className=" mt-2 ">{Hashtag}</p>
      <button onClick={()=>handleRead(readingTime,id)}>mark as read</button>
    </div>
  );
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmarks: PropTypes.func,
  handleRead:PropTypes.func
};
export default Blog;
