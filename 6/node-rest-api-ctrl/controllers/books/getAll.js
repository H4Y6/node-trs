const Book = require("../../models/books");

const getAll = async (req, res, next) => {
  try {
    // const result = await Book.find({}, "title author");
    const result = await Book.find({}, "-createdAt -updatedAt");
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
