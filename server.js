questionData = require('./data')
incorrectData = require('./incorrect')

const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors())

app.locals.questions = questionData;
app.locals.incorrect = incorrectData;

// app.set('port', process.env.PORT || 3001);
app.locals.title = 'project+dendrology API';

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.warn(`App listening on http://localhost:${PORT}`);
});

app.get('/', (request, response) => {
    response.send('Successful');
});  

app.get('/test', (request, response) => {
    response.status(200).json(app.locals.questions);
});

app.get('/incorrect', (request, response) => {
    response.status(200).json(app.locals.incorrect);
});