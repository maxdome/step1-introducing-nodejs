'use strict';

/*
  Express supports render engines
  We can use Swig (Twig port for Node.js), its another little library for our little requirement
 */

const express = require('express');
const swig = require('swig');

const app = express();
app.engine('twig', swig.renderFile);
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  res.render('homepage.html.twig', { example: 'Hello World, Chapter 3' });
});

app.listen(6669);
