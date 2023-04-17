const { basedir } = global;
const { createError } = require(`${basedir}/helpers`);
const { Book } = require(`${basedir}/models/books`);

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Book.findById(id);
  if (!result) {
    throw createError(404);
  }
  res.json(result);
};

module.exports = getById;
