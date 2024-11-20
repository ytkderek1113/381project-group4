const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Book = require('../models/Book');
const axios = require('axios');

// Root route
router.get('/', (req, res) => {
  res.render('welcome');
});
// Register route
router.get('/register', (req, res) => {
  res.render('register', { error: null }); // Default to null or an empty string
});
// Register route
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Check if the username already exists
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    // Username exists, render the register page with an error message
    return res.render('register', { error: 'Username already exists' });
  }

  const user = new User({ username, password });
  await user.save();
  res.redirect('/login'); // Redirect to login after successful registration
});

// Route to redirect back to login
router.get('/back-to-login', (req, res) => {
  res.redirect('/login');
});

/// Login route
router.get('/login', (req, res) => {
  res.render('login', { error: null }); // Pass error as null on first load
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Check if the user exists
  const user = await User.findOne({ username });
  if (!user) {
    // Username does not exist, render the login page with an error message
    return res.render('login', { error: 'Invalid username or password' });
  }

  // Check if the password matches
  if (user.password !== password) {
    // Password does not match, render the login page with an error message
    return res.render('login', { error: 'Invalid username or password' });
  }

  // If both username and password are correct
  req.session.userId = user._id;
  res.redirect('/books');
});

// Logout route
router.get('/logout', (req, res) => {
  req.session = null;
  res.redirect('/login');
});

// CRUD routes for books
router.get('/books', async (req, res) => {
  const books = await Book.find();
  res.render('books', { books });
});

router.post('/books', async (req, res) => {
  const { title, author, genre } = req.body;
  await Book.create({ title, author, genre });
  res.redirect('/books');
});

router.put('/books/:id', async (req, res) => {
  const { id } = req.params;
  const { title, author, genre } = req.body;
  await Book.findByIdAndUpdate(id, { title, author, genre });
  res.redirect('/books');
});

router.delete('/books/:id', async (req, res) => {
  const { id } = req.params;
  await Book.findByIdAndDelete(id);
  res.redirect('/books');
});

// Search books route using Google Books API
router.get('/search', async (req, res) => {
  const { query } = req.query;
  const apiKey = 'AIzaSyCId9tmzJC-EtiRCbLuV1U1lK_bwifEYkc'; // Replace with your actual API key
  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`);
    const books = response.data.items;
    res.render('search', { books });
  } catch (error) {
    console.error(error);
    res.render('search', { books: [] });
  }
});

// RESTful API for books
router.get('/api/books', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

router.post('/api/books', async (req, res) => {
  const { title, author, genre } = req.body;
  const book = new Book({ title, author, genre });
  await book.save();
  res.json(book);
});

router.put('/api/books/:id', async (req, res) => {
  const { id } = req.params;
  const { title, author, genre } = req.body;
  const book = await Book.findByIdAndUpdate(id, { title, author, genre }, { new: true });
  res.json(book);
});

router.delete('/api/books/:id', async (req, res) => {
  const { id } = req.params;
  await Book.findByIdAndDelete(id);
  res.json({ message: 'Book deleted' });
});

module.exports = router;
