import React from 'react';
import Counter            from './components/Counter';
import WelcomeButton      from './components/WelcomeButton';
import SyntheticButton    from './components/SyntheticButton';
import CurrencyConvertor  from './components/CurrencyConverter';

function App() {
  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>Event Examples App</h1>
      <Counter />
      <WelcomeButton />
      <SyntheticButton />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
