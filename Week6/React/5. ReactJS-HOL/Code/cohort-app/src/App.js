import React from 'react';
import { cohorts } from './data';
import CohortDetails from './Components/CohortDetails.js';

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Cohort Overview</h1>
      {cohorts.map(cohort => (
        <CohortDetails key={cohort.id} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;
