const { Schema, model } = require("mongoose");
const Joi = require("joi");

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
    isbn: {
      type: String,
      match: /\d{3}-\d{3}-\d{4}-\d{2}-\d/,
      required: true,
      unique: true,
    },
    owner: { type: Schema.Types.ObjectId, ref: "user" },
  },
  { versionKey: false, timestamps: true }
);

const addSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  favorite: Joi.boolean(),
  genres: Joi.string().valueOf("science", "fancy", "love").required(),
  isbn: Joi.string()
    .pattern(/\d{3}-\d{3}-\d{4}-\d{2}-\d/)
    .required(),
});
const updateStatusSchema = Joi.object({
  favorite: Joi.boolean(),
});

const schemas = { add: addSchema, update: updateStatusSchema };

const Book = model("book", bookSchema);

module.exports = { Book, schemas };
