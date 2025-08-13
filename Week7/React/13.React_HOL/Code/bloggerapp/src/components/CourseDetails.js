import React from 'react';
import { courses } from '../data'; 

const CourseDetails = () => {
  return (
    <div>
      <h2>Course Details</h2>
      {courses.map((course) => (
        <div key={course.id}>
          <h3>{course.cname}</h3>
          <p>{course.date}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseDetails;