const { Book } = require("../../models/book");
const { createError } = require("../../helpers");

const deleteById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Book.findByIdAndDelete(id);
  if (!result) {
    throw createError(404);
  }
  res.json({ message: "Book`s deleted" });
};

module.exports = deleteById;
