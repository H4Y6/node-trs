const { basedir } = global;

const { Book } = require(`${basedir}/models/books`);
const { createError } = require(`${basedir}/helpers`);

const deleteById = async (req, res, next) => {
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

module.exports = deleteById;
