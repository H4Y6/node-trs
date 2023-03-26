const { Book } = require("../../models/books");

const getAll = async (req, res, next) => {
  const result = await Book.find({}, "-createdAt -updatedAt");
  // const result = await Book.find({}, "title author");
  res.json(result);
};

module.exports = getAll;
