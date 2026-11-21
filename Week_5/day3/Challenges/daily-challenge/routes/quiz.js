const express = require('express');
const router = express.Router();

const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" }
];

let gameState = {
  currentIndex: 0,
  score: 0,
  history: []
};

// GET /quiz: Start the quiz and display the current question
router.get('/', (req, res) => {
  if (gameState.currentIndex >= triviaQuestions.length) {
    return res.redirect('/quiz/score');
  }

  const currentQ = triviaQuestions[gameState.currentIndex];
  res.json({
    questionNumber: gameState.currentIndex + 1,
    totalQuestions: triviaQuestions.length,
    question: currentQ.question,
    currentScore: gameState.score
  });
});

// POST /quiz: Submit an answer to current question and move to the next question
router.post('/', (req, res) => {
  if (gameState.currentIndex >= triviaQuestions.length) {
    return res.status(400).json({
      message: 'Quiz already completed.',
      redirectTo: '/quiz/score'
    });
  }

  const { answer } = req.body;
  const currentQ = triviaQuestions[gameState.currentIndex];

  const isCorrect = (answer || '').trim().toLowerCase() === currentQ.answer.toLowerCase();
  if (isCorrect) {
    gameState.score++;
  }

  gameState.history.push({
    question: currentQ.question,
    userAnswer: answer,
    correctAnswer: currentQ.answer,
    isCorrect
  });

  gameState.currentIndex++;

  const isFinished = gameState.currentIndex >= triviaQuestions.length;

  res.json({
    correct: isCorrect,
    feedback: isCorrect ? 'Correct answer!' : `Incorrect! The correct answer was "${currentQ.answer}".`,
    currentScore: gameState.score,
    quizCompleted: isFinished,
    nextStep: isFinished ? 'Visit /quiz/score to view your final score.' : 'Submit the next answer to /quiz.'
  });
});

// GET /quiz/score: Display the user’s final score
router.get('/score', (req, res) => {
  res.json({
    finalScore: gameState.score,
    totalQuestions: triviaQuestions.length,
    percentage: `${Math.round((gameState.score / triviaQuestions.length) * 100)}%`,
    history: gameState.history
  });
});

// Reset quiz
router.post('/reset', (req, res) => {
  gameState = { currentIndex: 0, score: 0, history: [] };
  res.json({ message: 'Quiz reset successfully.' });
});

module.exports = router;
