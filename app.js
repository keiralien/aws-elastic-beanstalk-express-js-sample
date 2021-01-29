const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Great Googly-Moogly! It\'s all gone to shit!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
