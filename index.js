var express = require('express');

var bodyParser = require('body-parser');

var app = express();

var port = 8080;

var books = [{
  title: "One Flew Over the Cuckoos Nest",
  rating: 10
}];

app.use(bodyParser.json()); // USE: RUN THIS FUNCTION ON EVERY SINGLE REQUEST



app.get('/books', function(req, res, next) {
  // SEND BACK BOOKS ARRAY AS JSON
  console.log("getting...");
  var rating = parseInt(req.query.rating);
  if (rating) {
  var result = books.filter(function (book) {
    console.log("got.");
    return book.rating === rating;
  });
  res.status(200).json(result);
  }
  else {
    res.status(200).json(books);
    console.log("got.");
  }
});

app.post('/books', function(req, res, next) {
  console.log("posting...");
  books.push(req.body);
  res.status(200).json(books); // SEND BACK BOOKS ARRAY AS JSON
  console.log("posted.");
});

app.delete('/books/:id', function(req, res, next) {
  var id = parseInt(req.params.id);
  books.splice(id, 1); // TAKES ID FROM URL AND DELETES MATCHING VALUE FROM ARRAY
  res.status(200).send(books);
});

app.listen(port, function () {
  console.log('Listening on port ' + port);
});
