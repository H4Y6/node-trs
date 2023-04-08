const { Schema, model } = require("mongoose");
const Joi = require("joi");

const isbnRegexp = /[0-9]{3}-[0-9]{3}-[0-9]{4}-[0-9]{2}-[0-9]/;

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genres: {
      type: String,
      enum: ["science", "fancy", "love"],
      required: true,
    },
    favorite: { type: Boolean, default: false },
    isbn: { type: String, match: isbnRegexp, unique: true, required: true },
  },
  { versionKey: false, timestamps: true }
);

const bookAddSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  genres: Joi.string().valueOf("science fancy love").required(),
  isbn: Joi.string().pattern(isbnRegexp).required(),
  favorite: Joi.boolean().default(false),
});

const updateStatusSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = { add: bookAddSchema, update: updateStatusSchema };

const Book = model("book", bookSchema);

module.exports = { Book, schemas };
