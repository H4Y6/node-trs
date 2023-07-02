const { Book } = require("../../models/book");

const { createError } = require("../../helpers");

const removeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndRemove(id);
    if (!result) {
      throw createError(404);
    }
    res.json({ message: "Message deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = removeById;
