const { Book, schemas } = require("../../models/books");

const { createError } = require("../../helpers");

const updateFavorite = async (req, res, next) => {
  try {
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
  } catch (error) {
    next(error);
  }
};

module.exports = updateFavorite;
