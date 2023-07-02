const { Schema, model } = require("mongoose");
const Joi = require("joi");

const addSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  favorite: Joi.boolean(),
  genre: Joi.string().valueOf("fantastic", "love").required(),
  isbn: Joi.string()
    .pattern(/[0-9]{3}-[0-9]{1}-[0-9]{3}-[0-9]{5}-[0-9]{1}/)
    .required(),
});

const updateStatusSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    favorite: { type: Boolean, required: true, default: false },
    genre: { type: String, enum: ["fantastic", "love"], required: true },
    isbn: {
      type: String,
      match: /[0-9]{3}-[0-9]{1}-[0-9]{3}-[0-9]{5}-[0-9]{1}/,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const schemas = {
  add: addSchema,
  updateStatus: updateStatusSchema,
};

const Book = model("book", bookSchema);

module.exports = { Book, schemas };
