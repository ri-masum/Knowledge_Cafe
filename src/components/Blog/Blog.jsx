import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

import "./Blog.css";
function Blog({ blog, handleBookmarks }) {
  // console.log(blog);
  const {
    Title,
    coverImg,
    Author,
    AuthorImage,
    postedDate,
    readingTime,
    Hashtag,
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
    </div>
  );
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmarks: PropTypes.func,
};
export default Blog;
