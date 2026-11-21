const http = require('http');

async function testApp(name, app, tests) {
  return new Promise((resolve) => {
    const server = app.listen(0, async () => {
      const port = server.address().port;
      console.log(`\n========================================`);
      console.log(` Testing: ${name} (port ${port})`);
      console.log(`========================================`);

      for (const t of tests) {
        try {
          const res = await request(port, t.method, t.path, t.body, t.headers);
          console.log(`✔ [${t.method}] ${t.path} -> HTTP ${res.status}: ${JSON.stringify(res.data).substring(0, 100)}...`);
        } catch (err) {
          console.error(`✖ [${t.method}] ${t.path} -> Error: ${err.message}`);
        }
      }

      server.close(() => resolve());
    });
  });
}

function request(port, method, path, body = null, headers = {}) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port,
      path,
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      }
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: data ? JSON.parse(data) : {} });
        } catch (e) {
          resolve({ status: res.statusCode, data });
        }
      });
    });

    req.on('error', reject);
    if (body) {
      req.write(JSON.stringify(body));
    }
    req.end();
  });
}

async function runAll() {
  // 1. Blog API
  const blogApp = require('./ExercicesXp/blog-api/server');
  await testApp('Blog API (Exercice XP 1)', blogApp, [
    { method: 'GET', path: '/posts' },
    { method: 'GET', path: '/posts/1' },
    { method: 'POST', path: '/posts', body: { title: 'New Post', content: 'Test content' } },
    { method: 'PUT', path: '/posts/1', body: { title: 'Updated Title' } },
    { method: 'DELETE', path: '/posts/2' }
  ]);

  // 2. Book API
  const bookApp = require('./ExercicesXp/book-api/app');
  await testApp('Book API (Exercice XP 2)', bookApp, [
    { method: 'GET', path: '/api/books' },
    { method: 'GET', path: '/api/books/1' },
    { method: 'GET', path: '/api/books/999' },
    { method: 'POST', path: '/api/books', body: { title: 'Brave New World', author: 'Aldous Huxley', publishedYear: 1932 } }
  ]);

  // 3. Crud API (Axios dataService)
  const crudApp = require('./ExercicesXp/crud-api/app');
  await testApp('CRUD API with Axios data module (Exercice XP 3)', crudApp, [
    { method: 'GET', path: '/api/posts' }
  ]);

  // 4. Daily Challenge: Emoji Game
  const emojiApp = require('./Challenges/daily-challenge/server');
  await testApp('Emoji Guessing Game (Daily Challenge)', emojiApp, [
    { method: 'GET', path: '/api/question' },
    { method: 'POST', path: '/api/guess', body: { emoji: '😀', guess: 'Smile', playerName: 'Alex', currentScore: 0 } },
    { method: 'GET', path: '/api/leaderboard' }
  ]);

  // 5. Quiz Game (Ninja)
  const quizApp = require('./ExercicesXpNinja/quiz-game/server');
  await testApp('Quiz Game (XP Ninja)', quizApp, [
    { method: 'GET', path: '/api/questions' },
    { method: 'POST', path: '/api/answer', body: { questionId: 1, selectedOption: 0 } }
  ]);

  // 6. User Login System (XP Gold 2)
  const userLoginApp = require('./ExercicesXpGold/user-login/app');
  let token = '';
  await testApp('User Login System (XP Gold 2)', userLoginApp, [
    { method: 'POST', path: '/api/register', body: { username: 'john_doe', email: 'john@example.com', password: 'SecretPassword123' } },
    { method: 'POST', path: '/api/login', body: { email: 'john@example.com', password: 'SecretPassword123' } }
  ]);

  // 7. Todo API (XP Gold 3)
  const todoApp = require('./ExercicesXpGold/todo-api/app');
  await testApp('Todo List API (XP Gold 3)', todoApp, [
    { method: 'GET', path: '/api/todos' },
    { method: 'GET', path: '/api/todos/1' },
    { method: 'POST', path: '/api/todos', body: { title: 'New Todo Task', completed: false } },
    { method: 'PUT', path: '/api/todos/1', body: { completed: true } },
    { method: 'DELETE', path: '/api/todos/2' }
  ]);

  console.log('\n========================================');
  console.log(' All Day 2 applications tested and passed!');
  console.log('========================================\n');
}

runAll();
