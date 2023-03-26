const Book = require("../../models/books");
const createError = require("../../helpers");
const Joi = require("joi");

const bookAddSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  favorite: Joi.boolean(),
  genre: Joi.string().valueOf("fancy", "love").required(),
  isbn: Joi.string()
    .pattern(/\d{3}-\d{3}-\d{4}-\d{2}-\d/)
    .required(),
});

const add = async (req, res, next) => {
  try {
    const { error } = bookAddSchema.validate(req.body);
    if (error) {
      throw createError(400, error.message);
    }
    const result = await Book.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = add;
