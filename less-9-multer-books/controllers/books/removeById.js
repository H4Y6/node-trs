const { Book } = require("../../models/books");
const { createError } = require("../../helpers");

const removeById = async (req, res) => {
  const { id } = req.params;
  const result = await Book.findByIdAndRemove(id);
  if (!result) {
    throw createError(404);
  }
  // res.status(204).send()
  res.json({
    message: "Book deleted",
  });
};

module.exports = removeById;
