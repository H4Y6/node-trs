const { Book } = require("../../models/books");

const getAll = async (req, res, next) => {
  try {
    const result = await Book.find({}, "-createdAt -updatedAt");
    // const result = await Book.find({}, "title author");
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
