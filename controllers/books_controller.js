var books = require('../models/books');

module.exports = {
  index: function(req, res, next) {
    // SEND BACK BOOKS ARRAY AS JSON
    console.log("getting...");
    var rating = parseInt(req.query.rating);
    if (rating) {
    var result = books.filter(function (book) {
      return book.rating === rating;
    });
    res.status(200).json(result);
    console.log("got.");
    }
    else {
      res.status(200).json(books);
      console.log("got.");
    }
  },

  create: function(req, res, next) {
    console.log("posting...");
    books.push(req.body);
    res.status(200).json(books); // SEND BACK BOOKS ARRAY AS JSON
    console.log("posted.");
  },

  destroy: function(req, res, next) {
    var id = parseInt(req.params.id);
    books.splice(id, 1); // TAKES ID FROM URL AND DELETES MATCHING VALUE FROM ARRAY
    res.status(200).send(books);
  }
};
