import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <h1>Score Calculator</h1>
      <CalculateScore
        name="Alice"
        school="Greenwood High"
        total={450}
        goal={500}
      />
    </div>
  );
}

export default App;
