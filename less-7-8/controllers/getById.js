const { basedir } = global;

const { Book } = require(`${basedir}/models/books`);
const { createError } = require(`${basedir}/helpers`);

const getById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Book.findById(id);
  // const result = await Book.findOne({ _id: id });
  if (!result) {
    throw createError(404);
  }
  res.json(result);
};

module.exports = getById;
