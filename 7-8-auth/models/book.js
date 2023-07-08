const { Schema, model } = require("mongoose");
const Joi = require("joi");

const isbnRegexp = /[0-9]{3}-[0-9]{1}-[0-9]{3}-[0-9]{5}-[0-9]{1}/;

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    favorite: { type: Boolean, required: true, default: false },
    genres: {
      type: String,
      enum: ["fantastic", "science", "love"],
      required: true,
    },
    isbn: {
      type: String,
      match: isbnRegexp,
      required: true,
    },
    owner: { type: Schema.Types.ObjectId, ref: "user" },
  },
  { versionKey: false, timestamps: true }
);

const addSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  favorite: Joi.boolean(),
  genres: Joi.string().valueOf("fantastic", "science", "love").required(),
  isbn: Joi.string().pattern(isbnRegexp).required(),
});

const updateStatusSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = {
  add: addSchema,
  updateStatus: updateStatusSchema,
};

const Book = model("book", bookSchema);

module.exports = { Book, schemas };
