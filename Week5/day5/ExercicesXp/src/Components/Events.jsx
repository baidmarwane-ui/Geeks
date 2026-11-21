import React, { useState } from 'react';

function Events() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const clickMe = () => {
    alert('I was clicked');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      alert(`The Enter key was pressed, your input is: ${e.target.value}`);
    }
  };

  const toggle = () => {
    setIsToggleOn(prev => !prev);
  };

  return (
    <div style={{ border: '1px solid #e2e8f0', padding: '16px', borderRadius: '8px', marginBottom: '20px' }}>
      <h3>Exercise 2: Events</h3>
      <div style={{ marginBottom: '12px' }}>
        <button onClick={clickMe} style={{ padding: '8px 16px', cursor: 'pointer' }}>
          Click Me
        </button>
      </div>

      <div style={{ marginBottom: '12px' }}>
        <input
          type="text"
          placeholder="Press Enter to alert..."
          onKeyDown={handleKeyDown}
          style={{ padding: '8px', width: '260px' }}
        />
      </div>

      <div>
        <button onClick={toggle} style={{ padding: '8px 16px', cursor: 'pointer' }}>
          {isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    </div>
  );
}

export default Events;
