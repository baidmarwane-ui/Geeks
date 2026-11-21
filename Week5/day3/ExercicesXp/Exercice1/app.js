const express = require('express');
const routes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', routes);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

module.exports = app;
