const { basedir } = global;
const { Book, schemas } = require(`${basedir}/models/books`);
const { createError } = require(`${basedir}/helpers`);

const updateStatus = async (req, res, next) => {
  try {
    const { error } = schemas.updateStatus.validate(req.body);
    if (error) {
      throw createError(400, error.message);
    }
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body, { new: true });
    if (!result) {
      throw createError(404);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = updateStatus;
