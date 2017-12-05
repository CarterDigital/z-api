const mongoose = require('mongoose');
const moment = require('moment');

const handleResult = (err, result) => err || result;

exports.listQuotes = async (req, res) => {
  const result = await mongoose.connection.db
    .collection('quotes')
    .find()
    .toArray(handleResult());
  res.send(result);
};

exports.addQuote = async (req, res) => {
  // Create data object to insert to DB with sanitization
  const data = {
    name: req.sanitize(req.body.name),
    quote: req.sanitize(req.body.quote),
    avatar: req.sanitize(req.body.avatar),
    date: moment().format('Do MMMM YYYY'),
  };

  // Insert data object into database
  const result = await mongoose.connection.db.collection('quotes').insertOne(data, handleResult());

  res.send(result);
};
