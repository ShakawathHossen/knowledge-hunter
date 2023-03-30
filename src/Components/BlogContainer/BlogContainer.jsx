import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const BlogContainer = () => {
    const [blogs,setBlogs]=useState([])
    const [bookmark,setBookmark]=useState([])

    useEffect(()=>{
        fetch('data.json')
        .then (res=>res.json())
        .then(data=>setBlogs(data))

    },[])
    // bookmark handle
    const updateBookmark = (blog)=> {
        const newBookmark =[...bookmark,blog];
        setBookmark(newBookmark);

     } 
    // bookmark handle 

    return (
        <div className='md:w-10/12 mx-auto flex justify-between'>
          <div className='w-80%'>
          {
                blogs.map(blog=><Blog blog={blog} key={blog.id} updateBookmark={updateBookmark}></Blog>)
            }
          </div>
          <div>
            <div  className='w-20% my-6'>
            <div className="border-2 px-7 py-5 rounded mb-4">
                <p className='text-md font-bold text-blue-500'>Spent time on read: 177 min</p>

            </div>
            <div className="border-2 px-5 py-3 rounded  bg-slate-200">
                <p className='text-md pb-5 font-bold'>Bookmarked Blogs : {bookmark.length}</p>
                <p className='text-md font-semibold bg-white px-7 py-5'>{bookmark.name}</p>


            </div>

            </div>
    
          </div>
        </div>
    );
};

export default BlogContainer;