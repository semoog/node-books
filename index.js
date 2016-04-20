var express = require('express');

var bodyParser = require('body-parser');

var app = express();

var port = 8080;

var books = [{
  title: "One Flew Over the Cuckoos Nest"
}];

app.use(bodyParser.json()); // USE: RUN THIS FUNCTION ON EVERY SINGLE REQUEST



app.get('/books', function(req, res, next) {
  res.status(200).json(books); // SEND BACK BOOKS ARRAY AS JSON
});

app.post('/books', function(req, res, next) {
  books.push(req.body);
  res.status(200).json(books); // SEND BACK BOOKS ARRAY AS JSON
});

app.delete('/books/:hello', function(req, res, next) {
  books.pop();
  res.status(200).send(books);
});

app.listen(port, function () {
  console.log('Listening on port ' + port);
});
