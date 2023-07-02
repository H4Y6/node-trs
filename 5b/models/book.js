const { Schema, model } = require("mongoose");

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

const Book = model("book", bookSchema);

module.exports = { Book };
