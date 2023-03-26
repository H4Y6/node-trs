const { Schema, model } = require("mongoose");

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

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean(),
});

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    favorite: { type: String, default: false },
    genre: { type: String, enum: ["fancy", "love"], required: true },
    isbn: {
      type: String,
      match: /\d{3}-\d{3}-\d{4}-\d{2}-\d/,
      required: true,
      unique: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Book = model("book", bookSchema);

const schemas = { add: bookAddSchema, updateFavorite: updateFavoriteSchema };

module.exports = { Book, schemas };
