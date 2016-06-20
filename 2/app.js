'use strict';

/*
  Node.js has many little libraries which solve little requirements
    "package.json" descripe the needed libraries
    "npm install" install it
    with "require()" we can use it in the app

  The module system is CommonJS like, but specific for Node.js.
  (Hint: The ES2015 module system can be used with babel)

  Example, Express:
    Express for running webserver with routing
 */

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World, Chapter 2');
});

app.listen(6669);
