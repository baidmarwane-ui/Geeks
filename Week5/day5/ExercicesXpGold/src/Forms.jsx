import React, { useState } from 'react';

function Forms() {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState(null);
  const [errormessage, setErrormessage] = useState('');
  const [description, setDescription] = useState('This is the content of a textarea in React.');
  const [selectedCar, setSelectedCar] = useState('Volvo');

  const handleNameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleAgeChange = (e) => {
    const val = e.target.value;
    if (val !== '' && !Number(val)) {
      setErrormessage('Your age must be a number');
    } else {
      setErrormessage('');
    }
    setAge(val);
  };

  const mySubmitHandler = (e) => {
    e.preventDefault();
    if (age !== null && age !== '' && !Number(age)) {
      alert('Your age must be a number');
      return;
    }
    alert(`You are submitting: ${username}, age: ${age}`);
  };

  let header = '';
  if (username) {
    header = <h1>Hello {username} {age ? `(${age} years old)` : ''}</h1>;
  }

  return (
    <div style={{ border: '1px solid #cbd5e1', padding: '24px', borderRadius: '12px', background: '#ffffff', marginBottom: '30px' }}>
      <h2>Exercises XP Gold - Part I to VII: Form Controls</h2>

      {header}

      <form onSubmit={mySubmitHandler} style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '420px' }}>
        <div>
          <label style={{ display: 'block', fontWeight: '600', marginBottom: '4px' }}>Enter your name:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleNameChange}
            style={{ width: '100%', boxSizing: 'border-box', padding: '8px' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontWeight: '600', marginBottom: '4px' }}>Enter your age:</label>
          <input
            type="text"
            name="age"
            value={age || ''}
            onChange={handleAgeChange}
            style={{ width: '100%', boxSizing: 'border-box', padding: '8px' }}
          />
          {errormessage && <p style={{ color: 'red', margin: '4px 0 0', fontSize: '14px' }}>{errormessage}</p>}
        </div>

        <div>
          <label style={{ display: 'block', fontWeight: '600', marginBottom: '4px' }}>Part VI : Textarea</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
            style={{ width: '100%', boxSizing: 'border-box', padding: '8px' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontWeight: '600', marginBottom: '4px' }}>Part VII : Select Car</label>
          <select
            value={selectedCar}
            onChange={(e) => setSelectedCar(e.target.value)}
            style={{ width: '100%', boxSizing: 'border-box', padding: '8px' }}
          >
            <option value="Ford">Ford</option>
            <option value="Volvo">Volvo</option>
            <option value="Fiat">Fiat</option>
          </select>
          <p style={{ fontSize: '14px', color: '#64748b', margin: '4px 0 0' }}>Selected car: {selectedCar}</p>
        </div>

        <button type="submit" style={{ padding: '10px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
          Submit Form
        </button>
      </form>
    </div>
  );
}

export default Forms;
