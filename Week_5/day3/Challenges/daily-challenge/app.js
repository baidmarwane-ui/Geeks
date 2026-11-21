const express = require('express');
const quizRouter = require('./routes/quiz');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/quiz', quizRouter);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Trivia Quiz running at http://localhost:${PORT}`);
  });
}

module.exports = app;
