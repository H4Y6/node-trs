const Joi = require("joi");
const { Schema, model } = require("mongoose");

const addSchema = Joi.object({
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
    genre: { type: String, enum: ["fancy", "love"], required: true },
    favorite: { type: Boolean, default: false },
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

module.exports = { Book };
