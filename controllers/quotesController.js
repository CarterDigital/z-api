const mongoose = require('mongoose');

const handleResult = (err, result) => err || result;

exports.listQuotes = async (req, res) => {
  const result = await mongoose.connection.db
    .collection('quotes')
    .find()
    .toArray(handleResult());
  res.send(result);
};

exports.addQuote = async (req, res) => {
  const result = await mongoose.connection.db
    .collection('quotes')
    .insertOne(req.query, handleResult());
  res.send(result);
};
