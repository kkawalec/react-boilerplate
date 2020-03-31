const path = require('path');
const express = require('express');

const app = express();

app.use('/assets', express.static(path.resolve(__dirname, '../', 'dist', 'assets')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../', 'dist', 'index.html'));
});

app.listen(8080, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:8080/');
});
