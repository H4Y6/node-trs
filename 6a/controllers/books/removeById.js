const { basedir } = global;
const { Book } = require(`${basedir}/models/book`);
const { createError } = require(`${basedir}/helpers`);

const removeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndRemove(id);
    if (!result) {
      throw createError(404);
    }
    res.json({ message: "Book`s deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = removeById;
