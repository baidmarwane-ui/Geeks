const express = require('express');
const router = express.Router();

let todos = [
  { id: 1, text: 'Review Express.js documentation', done: true },
  { id: 2, text: 'Build modular routes with express.Router', done: false },
  { id: 3, text: 'Test endpoints with curl or Postman', done: false }
];

// Get all to-do items
router.get('/', (req, res) => {
  res.status(200).json(todos);
});

// Add a new to-do item
router.post('/', (req, res) => {
  const { text, done } = req.body;
  if (!text || typeof text !== 'string' || !text.trim()) {
    return res.status(400).json({ error: 'Text is required for the to-do item.' });
  }

  const nextId = todos.length ? Math.max(...todos.map(t => t.id)) + 1 : 1;
  const newTodo = {
    id: nextId,
    text: text.trim(),
    done: typeof done === 'boolean' ? done : false
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a to-do item by ID
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const todo = todos.find(t => t.id === id);

  if (!todo) {
    return res.status(404).json({ error: `Todo with ID ${id} not found.` });
  }

  const { text, done } = req.body;
  if (text !== undefined) todo.text = text.trim();
  if (done !== undefined) todo.done = Boolean(done);

  res.status(200).json(todo);
});

// Delete a to-do item by ID
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = todos.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: `Todo with ID ${id} not found.` });
  }

  const deleted = todos.splice(index, 1)[0];
  res.status(200).json({ message: 'Todo deleted successfully.', deleted });
});

module.exports = router;
