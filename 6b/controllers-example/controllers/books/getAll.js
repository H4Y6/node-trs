const { Book } = require("../../models/book");

const getAll = async (req, res, next) => {
  try {
    const result = await Book.find({}, "-createdAt -updatedAt");
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
