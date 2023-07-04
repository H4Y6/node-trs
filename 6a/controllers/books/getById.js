const { basedir } = global;
const { Book } = require(`${basedir}/models/book`);
const { createError } = require(`${basedir}/helpers`);

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Book.findById(id);
    if (!result) {
      throw createError(404);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getById;
