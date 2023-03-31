import React from 'react';
import './Blog.css'

const Blog = (props) => {
    const { id, name, blogTitle, readTimestamp, publishedDate, authorImage, blogImage,postDate } = props.blog;
    const updateBookmark=props.updateBookmark;
    const markAsRead=props.markAsRead;
    // console.log(props);
  
    return (
        <div>
            <div className="card bg-base-100 w-11/12 shadow-lg shadow-indigo-500/40  border-2 p-3 my-6">
                <img className='rounded-xl' src={blogImage} />
                <div className='flex justify-between items-center'>
                    <div className='flex my-4'>
                        <div>
                            <img src={authorImage} alt="" width='60px' />
                        </div>
                        <div className='ml-5'>
                            <p className='text-lg font-bold'>{name}</p>
                            <p className='text-slate-400 text-sm'>Mar 14 (4 Days ago)</p>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <p className='text-slate-400'>{readTimestamp} min read</p>
                        <span id='bookmark-icon' onClick={()=>updateBookmark(props.blog)} className='bookmark'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                        </svg>
                        </span>

                    </div>
                </div>
                <p className='text-2xl font-bold mb-2'>{blogTitle}</p>
                <p className='mb-2 text-slate-500'>#programming #coding</p>
                <button className='text-start text-sky-600 font-bold' onClick={() => markAsRead(readTimestamp)}>Mark as read</button>


            </div>
        </div>
    );
};

export default Blog;