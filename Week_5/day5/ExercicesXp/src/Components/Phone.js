import React, { useState } from 'react';

function Phone() {
  const [brand] = useState('Samsung');
  const [model] = useState('Galaxy S20');
  const [color, setColor] = useState('black');
  const [year] = useState(2020);

  const changeColor = () => {
    setColor('blue');
  };

  return (
    <div style={{ border: '1px solid #e2e8f0', padding: '16px', borderRadius: '8px', marginBottom: '20px' }}>
      <h3>Exercise 3: Phone Information</h3>
      <p>My phone is a <strong>{brand}</strong></p>
      <p>It is a {color} <strong>{model}</strong> from {year}</p>
      <button onClick={changeColor} style={{ padding: '8px 16px', cursor: 'pointer' }}>
        Change color to blue
      </button>
    </div>
  );
}

export default Phone;
