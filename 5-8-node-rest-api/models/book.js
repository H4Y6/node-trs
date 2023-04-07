const { Schema, model } = require("mongoose");
const Joi = require("joi");

const isbnRegexp = /\w{3}-\w{3}-\w{4}-\w{2}-\w/;

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    favorite: { type: Boolean, default: false },
    genres: { type: String, enum: ["fancy", "love"], required: true },
    isbn: { type: String, match: isbnRegexp, required: true },
  },
  { versionKey: false, timestamps: true }
);

const bookAddSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  favorite: Joi.boolean().default(false),
  genres: Joi.string().required(),
  isbn: Joi.string().pattern(isbnRegexp).required(),
});

const bookUpdateStatusSchema = Joi.object({
  favorite: Joi.boolean().default(false).required(),
});

const schemas = { add: bookAddSchema, updateStatus: bookUpdateStatusSchema };

const Book = model("book", bookSchema);

module.exports = { Book, schemas };
