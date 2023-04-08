const { basedir } = global;
const { Book } = require(`${basedir}/models/book`);
const { createError } = require(`${basedir}/helpers`);
const removeById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Book.findByIdAndRemove(id);
  if (!result) {
    throw createError(404);
  }
  res.json({ message: "Message deleted" });
};

module.exports = removeById;
