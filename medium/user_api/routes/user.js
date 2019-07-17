const express = require('express');
const bodyParser = require('body-parser');
const logger = require('../logger/logger');

const app = express();

// array to hold users
const users = [{ firstName: 'fnam1', lastName: 'lnam1', userName: 'username1' }];

app.use(bodyParser.json());

// request to get all the users
app.get('/users', (req, res) => {
  logger.info('/users route');
  res.json(users);
});

// request to get all the users by userName
app.get('/users/:userName', (req, res) => {
  logger.info(`filter users by username:::::${req.params.userName}`);
  const user = users.filter((user) => {
    if (req.params.userName === user.userName) {
      return user;
    }
  });
  res.json(user);
});

// request to post the user
// req.body has object of type {firstName:"fnam1",lastName:"lnam1",userName:"username1"}
app.post('/user', (req, res) => {
  logger.info('Adding User');
  users.push(req.body);
  res.json(users);
});

module.exports = app;
