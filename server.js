const express = require('express');
const bodyParser = require('body-parser');
const search = require('./search.js')
const app = express();

app.use(bodyParser.json())

app.get('/search', (req, res) => {
    res.send(search())
});

app.listen(3000, () => console.log('Search API listening on port 3000!'));