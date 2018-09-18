
'use strict';

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('./city-explorer'));

app.get('/', (request, response) => {
  response.sendFile('index.html', {root: './city-explorer'});
});

app.use('*', (request, response) => response.send('Sorry, that route does not exist.'))

app.listen(PORT,() => console.log(`Listening on port ${PORT}`));
