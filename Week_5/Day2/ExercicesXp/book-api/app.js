const express = require('express');

const app = express();
const PORT = 5000;

app.use(express.json());

let books = [
  { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960 },
  { id: 2, title: '1984', author: 'George Orwell', publishedYear: 1949 },
  { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publishedYear: 1925 }
];

app.get('/api/books', (req, res) => {
  res.status(200).json(books);
});

app.get('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId, 10);
  const book = books.find(b => b.id === bookId);

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  res.status(200).json(book);
});

app.post('/api/books', (req, res) => {
  const { title, author, publishedYear } = req.body;

  if (!title || !author) {
    return res.status(400).json({ message: 'Title and author are required.' });
  }

  const nextId = books.length ? Math.max(...books.map(b => b.id)) + 1 : 1;
  const newBook = {
    id: nextId,
    title,
    author,
    publishedYear: publishedYear ? parseInt(publishedYear, 10) : new Date().getFullYear()
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Book API is running on port ${PORT}`);
  });
}

module.exports = app;
