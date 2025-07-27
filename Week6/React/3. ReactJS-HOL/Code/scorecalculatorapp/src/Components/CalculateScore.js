import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore({ name, school, total, goal }) {
  const average = (total / goal).toFixed(2);

  return (
    <div className="score-card">
      <h2>Student: {name}</h2>
      <p>School: {school}</p>
      <p>Total Marks: {total}</p>
      <p>Goal Marks: {goal}</p>
      <p>Average Score: {average}</p>
    </div>
  );
}

export default CalculateScore;
