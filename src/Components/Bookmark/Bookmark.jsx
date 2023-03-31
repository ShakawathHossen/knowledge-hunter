import React from 'react';

const Bookmark = (props) => {
    const {blogTitle}=props.blog
    console.log(props.blog.name);
    return (
        <div className='bg-white py-6 px-4 my-4 font-semibold rounded text-xl'>
        {blogTitle}
        </div>
    );
};

export default Bookmark;