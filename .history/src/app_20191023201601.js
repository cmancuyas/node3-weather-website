const express = require('express');
const app = express();

// route, function
app.get('', (req, res) => {
  res.send('Hello express');
});

app.get('/help', (req, res) => {
    res.send('help page')
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});
