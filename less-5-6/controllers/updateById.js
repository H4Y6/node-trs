const { basedir } = global;
const { Book, schemas } = require(`${basedir}/models/book`);
const { createError } = require(`${basedir}/helpers`);

const updateById = async (req, res, next) => {
  const { error } = schemas.add.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const { id } = req.params;
  const result = await Book.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw createError(404);
  }
  res.status(201).json(result);
};

module.exports = updateById;
