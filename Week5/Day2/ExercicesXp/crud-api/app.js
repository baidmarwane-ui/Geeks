const express = require('express');
const { fetchPosts } = require('./data/dataService');

const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/api/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log('Data successfully retrieved from JSONPlaceholder and sent as response.');
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    res.status(500).json({ error: 'Failed to retrieve posts from external API.' });
  }
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;
