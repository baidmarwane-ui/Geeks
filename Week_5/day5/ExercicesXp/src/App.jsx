import React from 'react';
import Car from './Components/Car';
import Events from './Components/Events';
import Phone from './Components/Phone';
import Color from './Components/Color';

function App() {
  const carinfo = { name: 'Ford', model: 'Mustang' };

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', maxWidth: '700px', margin: '40px auto', padding: '20px' }}>
      <h1>Day 5 - Exercises XP</h1>
      
      <h2>Exercise 1: Car & Garage</h2>
      <Car carInfo={carinfo} />

      <Events />

      <Phone />

      <Color />
    </div>
  );
}

export default App;
