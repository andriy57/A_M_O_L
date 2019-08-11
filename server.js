const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, './')));

app.post('/callMe', (req, res) => {
  const fs = require('fs');
  fs.appendFile('./call-me.txt', JSON.stringify(req.body) + '\n', function(err) {
    res.send('Good save');
  });
});

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0');
