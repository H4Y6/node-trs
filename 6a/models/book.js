const { Schema, model } = require("mongoose");
const Joi = require("joi");

const isbnRegexp = /^\d\d\d-\d-\d{3}-\d{5}-\d$/;
const values = ["fantastic", "science"];

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genres: { type: String, enum: values, required: true },
    isbn: { type: String, match: isbnRegexp, required: true },
    favorite: { type: Boolean, default: false },
  },
  { versionKey: false, timestamps: true }
);

const addSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  genres: Joi.string()
    .valueOf(...values)
    .required(),
  isbn: Joi.string().pattern(isbnRegexp).required(),
  favorite: Joi.boolean().default(false),
});

const updateFavoriteSchema = Joi.object({ favorite: Joi.boolean().required() });

const schemas = { add: addSchema, updateFavorite: updateFavoriteSchema };

const Book = model("book", bookSchema);

module.exports = { Book, schemas };
