import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const BlogContainer = () => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then (res=>res.json())
        .then(data=>setBlogs(data))

    },[])
    return (
        <div className='md:w-8/12 mx-auto flex'>
          <div className='w-8/12'>
          {
                blogs.map(blog=><Blog blog={blog} key={blog.id}></Blog>)
            }
          </div>
          <div>
            <h1>BookMark</h1>
          </div>
        </div>
    );
};

export default BlogContainer;