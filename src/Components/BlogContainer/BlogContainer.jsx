import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const BlogContainer = () => {
    const [blogs, setBlogs] = useState([])
    const [bookmark, setBookmark] = useState([])
    const [totalReadTime, setTotalReadTime] = useState(0);


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])
    // bookmark handle
    const updateBookmark = (blog) => {
        const newBookmark = [...bookmark, blog];
        setBookmark(newBookmark);

    }
    // bookmark handle 
    // read time handle 
    const markAsRead = (readTime) => {
        setTotalReadTime(prevTotalReadTime => prevTotalReadTime + readTime);
    }

    // read time handle 
    return (
        <div className='md:w-10/12 mx-auto flex justify-between'>
            <div className='w-80%'>
                {
                    blogs.map(blog => <Blog blog={blog} key={blog.id} updateBookmark={updateBookmark} markAsRead={markAsRead}></Blog>)
                }
            </div>
            <div>
                <div className='w-20% my-6'>
                    <div className="border-2 px-7 py-5 rounded mb-4">
                        <p className='text-md font-bold text-blue-500'>Spent time on read: {totalReadTime} min</p>

                    </div>
                    <div className="border-2 px-5 py-3 rounded  bg-slate-200">
                        <p className='text-md pb-5 font-bold'>Bookmarked Blogs : {bookmark.length}</p>
                        <p className=''>
                            {bookmark.map(blog => (
                                <div key={blog.id}>{blog.blogTitle}</div>
                            ))}
                        </p>


                    </div>

                </div>

            </div>
        </div>
    );
};

export default BlogContainer;