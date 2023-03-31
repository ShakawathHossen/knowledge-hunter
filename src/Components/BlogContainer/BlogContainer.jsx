import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import { toast } from 'react-toastify';
import Bookmark from '../Bookmark/Bookmark';

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
        if (bookmark.find(item => item.id == blog.id)) {
            console.log(blog.id);
            toast.error("You have already bookmarked this blog!");

        }
        else {

            const newBookmark = [...bookmark, blog];
            setBookmark(newBookmark);
            toast.success("Bookmark Added Successfully!");
        }

    }
    // bookmark handle 
    // read time handle 
    const markAsRead = (readTime) => {
        setTotalReadTime(prevTotalReadTime => prevTotalReadTime + readTime);
    }

    // read time handle 

    // sweet toast 

    // sweet toast 
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
                        {
                                bookmark.map(blog=><Bookmark blog={blog} key={blog.id}></Bookmark>)
                            }
                    </div>
                  

                </div>

            </div>
        </div>
    );
};

export default BlogContainer;