const express = require('express');
const jwt = require('jsonwebtoken');

let bcrypt;
try {
  bcrypt = require('bcrypt');
} catch (e) {
  bcrypt = require('bcryptjs');
}

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_jwt_key_12345';

app.use(express.json());

const users = [];
const failedAttempts = new Map();

function validatePasswordComplexity(password) {
  return typeof password === 'string' && password.length >= 6 && /\d/.test(password) && /[a-zA-Z]/.test(password);
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required.' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token.' });
    }
    req.user = decoded;
    next();
  });
}

// POST /api/register
app.post('/api/register', async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ error: 'Username, email, and password are required.' });
    }

    if (!validatePasswordComplexity(password)) {
      return res.status(400).json({
        error: 'Password must be at least 6 characters long and contain both letters and numbers.'
      });
    }

    const existingUser = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (existingUser) {
      return res.status(409).json({ error: 'User with this email already exists.' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = {
      id: users.length + 1,
      username,
      email: email.toLowerCase(),
      password: hashedPassword,
      role: role || 'user',
      createdAt: new Date().toISOString()
    };

    users.push(newUser);

    res.status(201).json({
      message: 'User registered successfully.',
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
        role: newUser.role
      }
    });
  } catch (error) {
    console.error('Registration error:', error.message);
    res.status(500).json({ error: 'Server error during registration.' });
  }
});

// POST /api/login
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    const normalizedEmail = email.toLowerCase();
    const attempts = failedAttempts.get(normalizedEmail) || 0;

    if (attempts >= 3) {
      return res.status(429).json({
        error: 'Account temporarily locked due to 3 consecutive failed login attempts. Please try again later.'
      });
    }

    const user = users.find(u => u.email === normalizedEmail);
    if (!user) {
      failedAttempts.set(normalizedEmail, attempts + 1);
      return res.status(401).json({ error: 'Invalid credentials.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      failedAttempts.set(normalizedEmail, attempts + 1);
      return res.status(401).json({
        error: `Invalid credentials. Attempt ${attempts + 1} of 3.`
      });
    }

    failedAttempts.delete(normalizedEmail);

    const token = jwt.sign(
      { id: user.id, username: user.username, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.status(200).json({
      message: 'Login successful.',
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Login error:', error.message);
    res.status(500).json({ error: 'Server error during login.' });
  }
});

// GET /api/profile
app.get('/api/profile', authenticateToken, (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  if (!user) {
    return res.status(404).json({ error: 'User profile not found.' });
  }

  res.status(200).json({
    id: user.id,
    username: user.username,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`User Login System running on port ${PORT}`);
  });
}

module.exports = app;
