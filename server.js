const express = require('express');
const bodyParser = require('body-parser');
const search = require('./search.js')
const app = express();

app.use(bodyParser.json())

app.get('/search', (req, res) => {
    res.send(search.getNearest(51.5033640,-0.1276250))
});

app.listen(3000, () => console.log('Search API listening on port 3000!'));