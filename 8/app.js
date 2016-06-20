'use strict';

const express = require('express');

const app = express();

/*
 Routers can be used to separated different topics of routes in an application.
 Every router can define used middlewares and can be attached with a subroute to the app
 */
const router = express.Router();
router.get('/', (req, res) => {
  res.send('Hello World, Chapter 8');
});
app.use(router);

app.listen(6669);
