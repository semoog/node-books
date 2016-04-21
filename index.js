var express = require('express');
var bodyParser = require('body-parser');
// var cors = require('cors');

var booksController = require('./controllers/books_controller');
var policies = require('./policies/books_policies');

// INIT

var app = express();

var port = 8080;

app.use(bodyParser.json()); // USE: RUN THIS FUNCTION ON EVERY SINGLE REQUEST
// app.use(cors());
app.use(function (req, res, next) {
  console.log(req.body);
  next(); // CONTINUE AND RUN THE NEXT FUNCTION DOWN INSTEAD OF RETURNING A RESPONSE
});

// METHODS

app.get('/books', booksController.index);
app.post('/books', booksController.create);
app.delete('/books/:id', policies.isAuthorized, booksController.destroy);

// LISTEN

app.listen(port, function () {
  console.log('Listening on port ' + port);
});
