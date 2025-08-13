import React from 'react';
import ListOfPlayers   from './components/ListOfPlayers';
import IndianPlayers   from './components/IndianPlayers';

function App() {
  const flag = true; 

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>Cricket App — ES6 & React Lab</h1>
      {flag ? <ListOfPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
