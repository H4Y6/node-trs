const { Book } = require("../../models/books");

const { createError } = require("../../helpers");

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Book.findById(id);
    // const result = await Book.findOne({ _id: id });
    if (!result) {
      throw createError(404);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getById;
