questionData = require('../data')
incorrectData = require('../incorrect')

const express = require('express');
const serverless = require('serverless-http');

const cors = require('cors');
const app = express();

app.use(cors())

app.locals.questions = questionData;
app.locals.incorrect = incorrectData;

// app.set('port', process.env.PORT || 3001);
app.locals.title = 'project+dendrology API';

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.warn(`App listening on http://localhost:${PORT}`);
// });

const router = express.Router();

router.get('/', (request, response) => {
    response.send('Successful');
});  

router.get('/test', (request, response) => {
    response.status(200).json(app.locals.questions);
});

router.get('/incorrect', (request, response) => {
    response.status(200).json(app.locals.incorrect);
});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);