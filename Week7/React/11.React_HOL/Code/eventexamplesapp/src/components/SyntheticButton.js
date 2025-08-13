import React from 'react';

export default function SyntheticButton() {
  const handlePress = (e) => {
    console.log(e);           
    alert('I was clicked');
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <button onClick={handlePress}>Press Me</button>
    </div>
  );
}
