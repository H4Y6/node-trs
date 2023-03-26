const Joi = require("joi");

const Book = require("../../models/books");

const { createError } = require("../../helpers");

const bookAddSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  favorite: Joi.boolean(),
  genre: Joi.string().valueOf("fancy", "love").required(),
  isbn: Joi.string()
    .pattern(/\d{3}-\d{3}-\d{4}-\d{2}-\d/)
    .required(),
});
const updateById = async (req, res, next) => {
  try {
    const { error } = bookAddSchema.validate(req.body);
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

module.exports = updateById;
