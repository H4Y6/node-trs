const { Schema, model } = require("mongoose");

const Joi = require("joi");

const isbnRegexp = /[0-9]{3}-[0-9]{3}-[0-9]{4}-[0-9]{2}-[0-9]/;

const addSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  favorite: Joi.boolean().default(false),
  genres: Joi.string().valueOf("fancy", "love").required(),
  isbn: Joi.string().pattern(isbnRegexp).required(),
});

const updateStatusSchema = Joi.object({
  favorite: Joi.boolean().default(false),
});

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genres: { type: String, enum: ["fancy", "love"] },
    favorite: { type: Boolean, default: false },
    isbn: {
      type: String,
      match: isbnRegexp,
      unique: true,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const schemas = { add: addSchema, updateStatus: updateStatusSchema };

const Book = model("book", bookSchema);

module.exports = { Book, schemas };
