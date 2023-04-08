const { basedir } = global;
const { Book } = require(`${basedir}/models/book`);
const { createError } = require(`${basedir}/helpers`);

const getById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Book.findById(id, "-createdAt -updatedAt");
  if (!result) {
    throw createError(404, "Not found");
  }
  res.json(result);
};

module.exports = getById;
