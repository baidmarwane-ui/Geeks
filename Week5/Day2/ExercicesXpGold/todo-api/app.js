const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let todos = [
  { id: 1, title: 'Learn Express.js fundamentals', completed: true },
  { id: 2, title: 'Build a RESTful CRUD API', completed: true },
  { id: 3, title: 'Practice JWT Authentication', completed: false }
];

// GET /api/todos
app.get('/api/todos', (req, res) => {
  res.status(200).json(todos);
});

// GET /api/todos/:id
app.get('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid ID format. Must be an integer.' });
  }

  const todo = todos.find(t => t.id === id);
  if (!todo) {
    return res.status(404).json({ error: `Todo with ID ${id} not found.` });
  }

  res.status(200).json(todo);
});

// POST /api/todos
app.post('/api/todos', (req, res) => {
  const { title, completed } = req.body;

  if (!title || typeof title !== 'string' || !title.trim()) {
    return res.status(400).json({ error: 'Title is required and must be a non-empty string.' });
  }

  const nextId = todos.length ? Math.max(...todos.map(t => t.id)) + 1 : 1;
  const newTodo = {
    id: nextId,
    title: title.trim(),
    completed: typeof completed === 'boolean' ? completed : false
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PUT /api/todos/:id
app.put('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid ID format.' });
  }

  const index = todos.findIndex(t => t.id === id);
  if (index === -1) {
    return res.status(404).json({ error: `Todo with ID ${id} not found.` });
  }

  const { title, completed } = req.body;
  if (title !== undefined && (typeof title !== 'string' || !title.trim())) {
    return res.status(400).json({ error: 'Title must be a non-empty string.' });
  }

  todos[index] = {
    ...todos[index],
    title: title !== undefined ? title.trim() : todos[index].title,
    completed: typeof completed === 'boolean' ? completed : todos[index].completed
  };

  res.status(200).json(todos[index]);
});

// DELETE /api/todos/:id
app.delete('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid ID format.' });
  }

  const index = todos.findIndex(t => t.id === id);
  if (index === -1) {
    return res.status(404).json({ error: `Todo with ID ${id} not found.` });
  }

  const deletedTodo = todos.splice(index, 1)[0];
  res.status(200).json({ message: 'Todo deleted successfully.', deletedTodo });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Todo List API running on port ${PORT}`);
  });
}

module.exports = app;
