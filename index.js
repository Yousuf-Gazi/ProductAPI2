const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

// creating our express app
const app = express();

//middleware
app.use(bodyParser.json());

app.use('/', routes);

app.get('/', (req, res) => {
    res.json({
        message: 'I am root route'
    });
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});