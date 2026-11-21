const express = require('express');
const todosRouter = require('./routes/todos');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/todos', todosRouter);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Todos API running at http://localhost:${PORT}`);
  });
}

module.exports = app;
