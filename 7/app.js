'use strict';

const express = require('express');

const app = express();

/*
 Middlewares can be restricted to routes
 Important: The restriction is an "all routes STARTS with /stop"
 */

app.use('/stop', (req, res, next) => {
  next();
});

/*
 Middlewares can stop the chain by not calling "next();"
 Important: The client doesn't stop to wait for a response if "res.send();" is not called
 */

app.use('/stop', (req, res, next) => {
  res.send('Stopped by middleware');
});

/*
 Middlewares can throw an error by call next() with a parameter
 */

app.use('/error', (req, res, next) => {
  next('A lovely error');
});

/*
 Special middlwares which accepts an error parameter gets only called if there is an error
 Important: The middleware must accept 4 parameter to be detected as error handler middlware
 */

app.use((err, req, res, next) => {
  res.send(err);
});


app.get('/', (req, res) => {
  res.send('Hello World, Chapter 7');
});

app.listen(6669);
