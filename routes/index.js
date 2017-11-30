const express = require('express');

const router = express.Router();
const quotes = require('../controllers/quotesController');

// Define routes
router.get('/quotes/', quotes.listQuotes);
router.post('/quotes/add', quotes.addQuote);

module.exports = router;
