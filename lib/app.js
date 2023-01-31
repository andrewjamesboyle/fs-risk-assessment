const express = require('express');

const app = express();

app.use('/v1/completions', require('./controllers/completions'));

module.exports = app;
