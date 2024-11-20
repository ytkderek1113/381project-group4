// models/Book.js
const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  reviews: [String]
});
module.exports = mongoose.model('Book', bookSchema);
