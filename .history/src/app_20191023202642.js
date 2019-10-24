const express = require('express');
const app = express();

// route, function
app.get('', (req, res) => {
  res.send('Hello express');
});

app.get('/help', (req, res) => {
  res.send([
    {
      name: 'Kobe',
      age: 27
    },
    {
      name: 'Kimbee',
      age: 27
    }
  ]);
});

app.get('/about', (req, res) => {
  res.send('about page');
});

app.get('/weather', (req, res) => {
  res.send('<h1>Weather page</h1>');
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});
