const express = require('express');
const booksRouter = require('./routes/books');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/books', booksRouter);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Books API running at http://localhost:${PORT}`);
  });
}

module.exports = app;
