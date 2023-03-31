import React from 'react';

const Bookmark = (props) => {
    const {blogTitle}=props.blog
    return (
        <div className='bg-white py-6 px-4 my-4 font-semibold rounded text-xl'>
        {blogTitle}
        </div>
    );
};

export default Bookmark;