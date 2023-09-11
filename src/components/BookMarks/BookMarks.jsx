import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

function BookMarks({ bookmarks }) {


  return (
    <div className="md:w-1/3 bg-gray-300  rounded-xl">
      <h1 className="text-2xl text-center">Book Marks:{bookmarks.length}</h1>
{
    bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
}
    </div>
  );
}

BookMarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
};
export default BookMarks;
