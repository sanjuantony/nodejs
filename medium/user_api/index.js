const express = require('express');
// bodyParser = require("body-parser"),
const logger = require('./logger/logger');
const routes = require('./routes/routes');

const app = express();
const port = 3070;

const users = [{ firstName: 'fnam1', lastName: 'lnam1', userName: 'username1' }];

// app.use(bodyParser.json());
app.use('/api', routes);

// default user
app.get('/', (req, res) => {
  res.send('App works!!');
});


/*
// request to get all the users
app.get("/users", function(req, res) {
    res.json(users);
});

// request to get all the users by userName
app.get("/users/:userName", function(req, res) {
    let user = users.filter(function(user){
        if(req.params.userName === user.userName){
            return user;
        }
    });
    res.json(user);
});

// request to post the user
// req.body has object of type {firstName:"fnam1",lastName:"lnam1",userName:"username1"}
app.post("/user", function(req, res) {
    users.push(req.body);
    res.json(users);
});
*/

// request to handle undefined or all other routes
app.get('*', (req, res) => {
  logger.info('Generic Users Route');
  res.send('App works!!!!!= Generic Route Invoked');
});

app.listen(port, (err) => {
  logger.info(`running server on from port:::::::${port}`);
});
