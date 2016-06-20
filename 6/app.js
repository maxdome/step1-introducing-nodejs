'use strict';

/*
  Middlewares are just functions with a special signature
  which will be executed in a chain on every request
 */

const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('request received, middleware A');
  next();
});

app.use((req, res, next) => {
  console.log('request received, middleware B');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World, Chapter 6');
});

app.listen(6669);
