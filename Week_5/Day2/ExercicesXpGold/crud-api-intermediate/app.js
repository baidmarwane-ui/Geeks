const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 5000;
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

app.use(express.json());

// Read all posts
app.get('/api/posts', async (req, res) => {
  try {
    const response = await axios.get(BASE_URL);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    res.status(500).json({ error: 'Failed to retrieve posts from external API.' });
  }
});

// Read single post
app.get('/api/posts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`${BASE_URL}/${id}`);
    res.status(200).json(response.data);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return res.status(404).json({ error: `Post with id ${req.params.id} not found.` });
    }
    console.error('Error fetching post:', error.message);
    res.status(500).json({ error: 'Failed to retrieve post from external API.' });
  }
});

// Create post
app.post('/api/posts', async (req, res) => {
  try {
    const { title, body, userId } = req.body;
    if (!title || !body) {
      return res.status(400).json({ error: 'Title and body are required.' });
    }
    const response = await axios.post(BASE_URL, {
      title,
      body,
      userId: userId || 1
    });
    res.status(201).json(response.data);
  } catch (error) {
    console.error('Error creating post:', error.message);
    res.status(500).json({ error: 'Failed to create post on external API.' });
  }
});

// Update post
app.put('/api/posts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.put(`${BASE_URL}/${id}`, req.body);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error updating post:', error.message);
    res.status(500).json({ error: 'Failed to update post on external API.' });
  }
});

// Delete post
app.delete('/api/posts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await axios.delete(`${BASE_URL}/${id}`);
    res.status(200).json({ message: `Post with id ${id} successfully deleted.` });
  } catch (error) {
    console.error('Error deleting post:', error.message);
    res.status(500).json({ error: 'Failed to delete post on external API.' });
  }
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Intermediate CRUD API running on port ${PORT}`);
  });
}

module.exports = app;
