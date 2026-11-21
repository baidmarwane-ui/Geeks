import React, { useState, useEffect } from 'react';

function Color() {
  const [favoriteColor, setFavoriteColor] = useState('red');

  useEffect(() => {
    alert('useEffect reached');
  }, [favoriteColor]);

  const changeToBlue = () => {
    setFavoriteColor('blue');
  };

  return (
    <div style={{ border: '1px solid #e2e8f0', padding: '16px', borderRadius: '8px', marginBottom: '20px' }}>
      <h3>Exercise 4: useEffect Hook</h3>
      <h2>My Favorite Color is <em>{favoriteColor}</em></h2>
      <button onClick={changeToBlue} style={{ padding: '8px 16px', cursor: 'pointer' }}>
        Change Color to Blue
      </button>
    </div>
  );
}

export default Color;
