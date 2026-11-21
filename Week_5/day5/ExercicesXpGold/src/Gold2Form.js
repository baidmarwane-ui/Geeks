import React, { useState } from 'react';

function Gold2Form() {
  // Exercise 1 state
  const [formData1, setFormData1] = useState({ title: '', author: '', genre: '', year: '' });
  const [successMsg1, setSuccessMsg1] = useState(false);

  // Exercise 2 state
  const [userProfile, setUserProfile] = useState({ firstName: '', lastName: '', phone: '', email: '' });
  const [isSubmitted2, setIsSubmitted2] = useState(false);
  const [error2, setError2] = useState('');

  // Exercise 1 handlers
  const handleEx1Change = (e) => {
    setFormData1({ ...formData1, [e.target.name]: e.target.value });
  };

  const handleEx1Submit = (e) => {
    e.preventDefault();
    console.log('Exercise 1 Form Data:', formData1);
    setSuccessMsg1(true);
  };

  // Exercise 2 handlers
  const handleEx2Change = (e) => {
    setUserProfile({ ...userProfile, [e.target.name]: e.target.value });
  };

  const handleEx2Submit = (e) => {
    e.preventDefault();
    const { firstName, lastName, phone, email } = userProfile;
    if (!firstName || !lastName || !phone || !email) {
      setError2('All fields are required.');
      return;
    }
    setError2('');
    setIsSubmitted2(true);
  };

  const handleEx2Reset = () => {
    setUserProfile({ firstName: '', lastName: '', phone: '', email: '' });
    setIsSubmitted2(false);
    setError2('');
  };

  return (
    <div>
      {/* Exercise 1 */}
      <div style={{ border: '1px solid #cbd5e1', padding: '24px', borderRadius: '12px', background: '#ffffff', marginBottom: '30px' }}>
        <h2>Exercise XP Gold #2 - Exercise 1: Form Data & Console Output</h2>
        <form onSubmit={handleEx1Submit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
          <input
            type="text"
            name="title"
            placeholder="Book Title"
            value={formData1.title}
            onChange={handleEx1Change}
            style={{ padding: '8px' }}
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={formData1.author}
            onChange={handleEx1Change}
            style={{ padding: '8px' }}
          />
          <input
            type="text"
            name="genre"
            placeholder="Genre"
            value={formData1.genre}
            onChange={handleEx1Change}
            style={{ padding: '8px' }}
          />
          <input
            type="text"
            name="year"
            placeholder="Year Published"
            value={formData1.year}
            onChange={handleEx1Change}
            style={{ padding: '8px' }}
          />
          <button type="submit" style={{ padding: '10px', background: '#059669', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
            Submit
          </button>
        </form>
        {successMsg1 && (
          <p style={{ color: '#059669', fontWeight: 'bold', marginTop: '12px' }}>
            Success! Form data logged to console.
          </p>
        )}
      </div>

      {/* Exercise 2 */}
      <div style={{ border: '1px solid #cbd5e1', padding: '24px', borderRadius: '12px', background: '#ffffff' }}>
        <h2>Exercise XP Gold #2 - Exercise 2: Form Toggle & Display</h2>
        {isSubmitted2 ? (
          <div>
            <h3>Submitted User Information</h3>
            <p><strong>First Name:</strong> {userProfile.firstName}</p>
            <p><strong>Last Name:</strong> {userProfile.lastName}</p>
            <p><strong>Phone:</strong> {userProfile.phone}</p>
            <p><strong>Email:</strong> {userProfile.email}</p>
            <button
              onClick={handleEx2Reset}
              style={{ padding: '10px 20px', background: '#dc2626', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Reset Form
            </button>
          </div>
        ) : (
          <form onSubmit={handleEx2Submit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
            {error2 && <p style={{ color: 'red', margin: 0 }}>{error2}</p>}
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={userProfile.firstName}
              onChange={handleEx2Change}
              style={{ padding: '8px' }}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={userProfile.lastName}
              onChange={handleEx2Change}
              style={{ padding: '8px' }}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={userProfile.phone}
              onChange={handleEx2Change}
              style={{ padding: '8px' }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={userProfile.email}
              onChange={handleEx2Change}
              style={{ padding: '8px' }}
            />
            <button
              type="submit"
              style={{ padding: '10px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Submit Profile
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Gold2Form;
