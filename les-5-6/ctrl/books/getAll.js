const { Book } = require("../../models/book");

const getAll = async (req, res, next) => {
  const result = await Book.find({}, "title author genres");
  res.json(result);
};

module.exports = getAll;
