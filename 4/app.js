'use strict';

/*
  Some more about basic libraries build into Node.js

  Example, http:
    http to make requests to other servers
 */

const express = require('express');
const http = require('http');
const swig = require('swig');

const app = express();
app.engine('twig', swig.renderFile);
app.set('views', __dirname + '/views');

app.get('/:term', (req, res) => {
  const term = req.params.term;
  http.get(`http://store.maxdome.de/_ajax/autocomplete?term=${term}`, server => {
    let data = '';
    server.on('data', (chunk) => {
      data += chunk;
    });
    server.on('end', () => {
      const json = JSON.parse(data);
      res.render('homepage.html.twig', { term, results: json.results });
    });
  });
});

app.get('/', (req, res) => {
  res.redirect('/harry');
});

app.listen(6669);
