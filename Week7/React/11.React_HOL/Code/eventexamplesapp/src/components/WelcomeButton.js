import React from 'react';

export default function WelcomeButton() {
  const sayWelcome = (msg) => {
    alert(`Welcome, ${msg}!`);
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <button onClick={() => sayWelcome('to our site')}>Say Welcome</button>
    </div>
  );
}
