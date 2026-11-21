const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const questions = [
  {
    id: 1,
    question: 'What runtime environment is used to execute JavaScript outside of a browser?',
    options: ['Node.js', 'JVM', 'Python VM', '.NET CLR'],
    correctAnswer: 0
  },
  {
    id: 2,
    question: 'Which module in Node.js is used to work with the file system?',
    options: ['http', 'fs', 'path', 'os'],
    correctAnswer: 1
  },
  {
    id: 3,
    question: 'Which HTTP method is typically used to create a new resource in a REST API?',
    options: ['GET', 'DELETE', 'POST', 'PUT'],
    correctAnswer: 2
  },
  {
    id: 4,
    question: 'What HTTP status code represents "Not Found"?',
    options: ['200', '400', '404', '500'],
    correctAnswer: 2
  },
  {
    id: 5,
    question: 'Which Express method is used to parse JSON bodies in incoming requests?',
    options: ['express.urlencoded()', 'express.json()', 'express.static()', 'express.router()'],
    correctAnswer: 1
  }
];

app.get('/api/questions', (req, res) => {
  const sanitized = questions.map(({ id, question, options }) => ({ id, question, options }));
  res.json(sanitized);
});

app.post('/api/answer', (req, res) => {
  const { questionId, selectedOption } = req.body;
  const question = questions.find(q => q.id === questionId);

  if (!question) {
    return res.status(404).json({ error: 'Question not found.' });
  }

  const isCorrect = question.correctAnswer === selectedOption;
  res.json({
    correct: isCorrect,
    correctAnswerIndex: question.correctAnswer,
    correctAnswerText: question.options[question.correctAnswer]
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Quiz Game server running at http://localhost:${PORT}`);
  });
}

module.exports = app;
