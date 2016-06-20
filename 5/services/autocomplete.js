'use strict';

const http = require('http');

module.exports = host => (term, callback) => {
  http.get(`http://${host}/_ajax/autocomplete?term=${term}`, server => {
    let data = '';
    server.on('data', (chunk) => {
      data += chunk;
    });
    server.on('end', () => {
      callback(null, JSON.parse(data));
    });
  });
};
