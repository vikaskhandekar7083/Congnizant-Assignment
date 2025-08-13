import React, { useState } from 'react';

export default function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros]   = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();  
    const rate = 0.011;
    setEuros((parseFloat(rupees) || 0) * rate);
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <h2>Currency Converter (INR → EUR)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={rupees}
          placeholder="Enter INR"
          onChange={e => setRupees(e.target.value)}
        />{' '}
        <button type="submit">Convert</button>
      </form>
      {euros !== null && (
        <p>
          ₹{rupees} = €{euros.toFixed(2)}
        </p>
      )}
    </div>
  );
}
