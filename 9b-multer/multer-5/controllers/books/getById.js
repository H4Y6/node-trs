const { basedir } = global;
const { createError } = require(`${basedir}/helpers`);
const { Book } = require(`${basedir}/models/book`);

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Book.findById(id);
  // const result = await Book.findOne({ _id: id });
  if (!result) {
    throw createError(404);
  }
  res.json(result);
};

module.exports = getById;
