const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const emojis = [
  { emoji: '😀', name: 'Smile' },
  { emoji: '🐶', name: 'Dog' },
  { emoji: '🌮', name: 'Taco' },
  { emoji: '🚀', name: 'Rocket' },
  { emoji: '🍕', name: 'Pizza' },
  { emoji: '🎸', name: 'Guitar' },
  { emoji: '🐱', name: 'Cat' },
  { emoji: '⚽', name: 'Soccer Ball' },
  { emoji: '🎉', name: 'Party Popper' },
  { emoji: '☕', name: 'Coffee' },
  { emoji: '🦁', name: 'Lion' },
  { emoji: '🍔', name: 'Burger' },
  { emoji: '🎨', name: 'Artist Palette' },
  { emoji: '✈️', name: 'Airplane' },
  { emoji: '🌈', name: 'Rainbow' }
];

let leaderboard = [
  { player: 'Alex', score: 8 },
  { player: 'Sam', score: 6 },
  { player: 'Jordan', score: 5 }
];

function getRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  const correctEmoji = emojis[randomIndex];

  const distractors = emojis
    .filter(e => e.name !== correctEmoji.name)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
    .map(e => e.name);

  const options = [...distractors, correctEmoji.name].sort(() => 0.5 - Math.random());

  return {
    emoji: correctEmoji.emoji,
    options
  };
}

app.get('/api/question', (req, res) => {
  const question = getRandomQuestion();
  res.json(question);
});

app.post('/api/guess', (req, res) => {
  const { emoji, guess, playerName, currentScore } = req.body;
  const match = emojis.find(e => e.emoji === emoji);

  if (!match) {
    return res.status(400).json({ error: 'Emoji not found.' });
  }

  const isCorrect = match.name.toLowerCase() === (guess || '').trim().toLowerCase();
  const updatedScore = isCorrect ? (currentScore || 0) + 1 : (currentScore || 0);

  if (playerName && updatedScore > 0) {
    const existingEntry = leaderboard.find(e => e.player.toLowerCase() === playerName.toLowerCase());
    if (existingEntry) {
      existingEntry.score = Math.max(existingEntry.score, updatedScore);
    } else {
      leaderboard.push({ player: playerName, score: updatedScore });
    }
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 10);
  }

  res.json({
    correct: isCorrect,
    correctName: match.name,
    score: updatedScore
  });
});

app.get('/api/leaderboard', (req, res) => {
  res.json(leaderboard);
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Emoji Guessing Game running at http://localhost:${PORT}`);
  });
}

module.exports = app;
