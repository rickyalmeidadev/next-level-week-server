import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  response.json([
    'Ricky',
    'Lucas',
    'Ricardo'
  ])
});

app.listen(3333);