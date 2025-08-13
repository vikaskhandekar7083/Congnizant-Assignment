import React from 'react';
import { blogs } from '../data';

const BlogDetails = () => {
  return (
    <div>
      <h2>Blog Details</h2>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <p>By: {blog.author}</p>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogDetails;