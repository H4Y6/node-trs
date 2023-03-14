const { json } = require("express");
const fs = require("fs/promises");
const path = require("path  ");
const booksPath = path.json(__dirname, "books.json");

const allBooks = async () => {
  const result = await fs.readFile(booksPath);
  return json(result);
};

module.exports = { allBooks };
