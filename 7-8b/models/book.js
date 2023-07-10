const { Schema, model } = require("mongoose");
const Joi = require("joi");

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genres: {
      type: String,
      enum: ["fancy", "love", "science"],
      required: true,
    },
    favorite: { type: Boolean, default: false },
    isbn: {
      type: String,
      match: /^\d{3}-\d-\d{3}-\d{5}-\d$/,
      required: true,
      unique: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Book = model("book", bookSchema);

const addSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  favorite: Joi.boolean(),
  genres: Joi.string().valueOf("fancy", "love").required(),
  isbn: Joi.string()
    .pattern(/\d{3}-\d-\d{3}-\d{5}-\d/)
    .required(),
});
const updateStatusSchema = Joi.object({
  favorite: Joi.boolean(),
});

const schemas = { add: addSchema, updateFavorite: updateStatusSchema };

module.exports = { Book, schemas };
