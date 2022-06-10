questionData = require('./data')
incorrectData = require('./incorrect')

const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors())

app.locals.questions = questionData;
app.locals.incorrect = incorrectData;

app.set('port', process.env.PORT || 3001);
app.locals.title = 'project+dendrology API';

app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
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