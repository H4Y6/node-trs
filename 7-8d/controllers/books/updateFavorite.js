const { basedir } = global;
const { createError } = require(`${basedir}/helpers`);
const { Book, schemas } = require(`${basedir}/models/book`);

const updateFavorite = async (req, res) => {
  const { error } = schemas.updateFavorite.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const { id } = req.params;
  const result = await Book.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw createError(404);
  }
  res.json(result);
};

module.exports = updateFavorite;
