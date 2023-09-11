import PropTypes from 'prop-types'

function Bookmark({bookmark}) {
    const {Title}=bookmark



    return (
        <div className='text-center bg-sky-200 p-2 mt-2 rounded-lg'  >

            <p className='mt-2'>{Title}</p>
           
            
        </div>
    );
}

Bookmark.propTypes={
    bookmarks:PropTypes.object
}
export default Bookmark;