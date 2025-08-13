// src/App.js

import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import CourseDetails from './components/CourseDetails';
import BlogDetails from './components/BlogDetails';
import './App.css';

function App() {
  const [showBlogs, setShowBlogs] = useState(true); 

  return (
    <div className="app-container">
      <div className="component-container">
        <CourseDetails />
      </div>

      <div className="component-container">
        <BookDetails />
      </div>

      <div className="component-container">
        <button onClick={() => setShowBlogs(!showBlogs)}>
          {showBlogs ? 'Hide' : 'Show'} Blog Details
        </button>

        {showBlogs && <BlogDetails />}
      </div>
    </div>
  );
}

export default App;