const express = require('express');
const router = express.Router();

let books = [
  { id: 1, title: 'Clean Code', author: 'Robert C. Martin' },
  { id: 2, title: 'JavaScript: The Good Parts', author: 'Douglas Crockford' },
  { id: 3, title: 'Design Patterns', author: 'Erich Gamma et al.' }
];

// Get all books
router.get('/', (req, res) => {
  res.status(200).json(books);
});

// Add a new book
router.post('/', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: 'Title and author are required.' });
  }

  const nextId = books.length ? Math.max(...books.map(b => b.id)) + 1 : 1;
  const newBook = { id: nextId, title: title.trim(), author: author.trim() };
  books.push(newBook);

  res.status(201).json(newBook);
});

// Update a book by ID
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({ error: `Book with ID ${id} not found.` });
  }

  const { title, author } = req.body;
  if (title) book.title = title.trim();
  if (author) book.author = author.trim();

  res.status(200).json(book);
});

// Delete a book by ID
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = books.findIndex(b => b.id === id);

  if (index === -1) {
    return res.status(404).json({ error: `Book with ID ${id} not found.` });
  }

  const deleted = books.splice(index, 1)[0];
  res.status(200).json({ message: 'Book deleted successfully.', deleted });
});

module.exports = router;
