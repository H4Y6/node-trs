const { Book } = require("../../models/book");

const getAll = async (req, res) => {
  const result = await Book.find({}, "-createdAt -updatedAt");
  res.status(200).json(result);
};

module.exports = getAll;
