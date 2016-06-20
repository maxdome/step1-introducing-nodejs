'use strict';

/*
  We can exclude little pieces of the logic into own files

  Example, exclude the autocomplete request and response parsing
 */

const express = require('express');
const swig = require('swig');

const autocomplete = require('./services/autocomplete.js')('store.maxdome.de');

const app = express();
app.engine('twig', swig.renderFile);
app.set('views', __dirname + '/views');

app.get('/:term', (req, res) => {
  autocomplete(req.params.term, (err, data) => {
    if (err) {
      throw err;
    }
    res.render('homepage.html.twig', { term: req.params.term, results: data.results });
  });
});

app.get('/', (req, res) => {
  res.redirect('/harry');
});

app.listen(6669);
