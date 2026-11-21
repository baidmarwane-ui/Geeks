import React, { useState } from 'react';
import Garage from './Garage';

function Car(props) {
  const { carInfo } = props;
  const [color, setColor] = useState('red');

  return (
    <div style={{ border: '1px solid #e2e8f0', padding: '16px', borderRadius: '8px', marginBottom: '20px' }}>
      <h3>This car is {color} {carInfo.model}</h3>
      <Garage size="small" />
    </div>
  );
}

export default Car;
