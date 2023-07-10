const { Schema, model } = require("mongoose");

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
      match: /^\d{3}-\d{3}-\d{4}-\d{2}-\d$/,
      required: true,
      unique: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Book = model("book", bookSchema);

module.exports = { Book };
