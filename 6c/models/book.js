const { Schema, model } = require("mongoose");

isbnRegexp = /^\d\d\d-\d-\d{3}-\d{5}-\d$/;

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genres: {
      type: String,
      enum: ["fantastic", "love", "science"],
      required: true,
    },
    isbn: {
      type: String,
      match: isbnRegexp,
      required: true,
    },
    favorite: { type: Boolean, default: false },
  },
  { versionKey: false, timestamps: true }
);

const Book = model("book", bookSchema);

module.exports = Book;
