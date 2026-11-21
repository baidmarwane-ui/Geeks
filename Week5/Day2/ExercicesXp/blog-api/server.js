const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let posts = [
  { id: 1, title: 'Getting Started with Node.js', content: 'Node.js is a powerful JavaScript runtime built on Chrome\'s V8 engine.' },
  { id: 2, title: 'Understanding Express Routing', content: 'Express simplifies building web servers and RESTful APIs in JavaScript.' },
  { id: 3, title: 'RESTful API Best Practices', content: 'Use proper HTTP methods, status codes, and consistent JSON responses.' }
];

app.get('/posts', (req, res) => {
  res.status(200).json(posts);
});

app.get('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const post = posts.find(p => p.id === id);

  if (!post) {
    return res.status(404).json({ error: `Post with id ${id} not found.` });
  }

  res.status(200).json(post);
});

app.post('/posts', (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required.' });
  }

  const nextId = posts.length ? Math.max(...posts.map(p => p.id)) + 1 : 1;
  const newPost = { id: nextId, title, content };
  posts.push(newPost);

  res.status(201).json(newPost);
});

app.put('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const postIndex = posts.findIndex(p => p.id === id);

  if (postIndex === -1) {
    return res.status(404).json({ error: `Post with id ${id} not found.` });
  }

  const { title, content } = req.body;
  if (!title && !content) {
    return res.status(400).json({ error: 'At least title or content is required to update.' });
  }

  posts[postIndex] = {
    ...posts[postIndex],
    title: title || posts[postIndex].title,
    content: content || posts[postIndex].content
  };

  res.status(200).json(posts[postIndex]);
});

app.delete('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const postIndex = posts.findIndex(p => p.id === id);

  if (postIndex === -1) {
    return res.status(404).json({ error: `Post with id ${id} not found.` });
  }

  const deletedPost = posts.splice(postIndex, 1)[0];
  res.status(200).json({ message: 'Post successfully deleted.', deletedPost });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found.' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error.' });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Blog API running at http://localhost:${PORT}`);
  });
}

module.exports = app;
