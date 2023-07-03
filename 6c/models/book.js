const { Schema, model } = require("mongoose");

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: {
      type: String,
      enum: ["fantastic", "love", "science"],
      isbn: {
        type: String,
        match: /[0-9]{3}-[0-9]{1}-[0-9]{3}-[0-9]{5}-[0-9]/,
      },
      required: true,
    },
    favorite: { type: Boolean, default: false },
  },
  { versionKey: false, timestamps: true }
);

const Book = model("book", bookSchema);

module.exports = Book;
