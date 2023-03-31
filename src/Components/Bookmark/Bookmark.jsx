import React from 'react';

const Bookmark = (props) => {
    const {blogTitle}=props.blog
    console.log(props.blog.name);
    return (
        <div className='bg-white'>
            <p className='border-1 p-3'>{blogTitle}</p>
        </div>
    );
};

export default Bookmark;