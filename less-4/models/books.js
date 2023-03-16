const fs = require("fs/promises");
const path = require("path");

const booksPath = path.join(__dirname, "books.json");

const getAll = async () => {
  const data = await fs.readFile(booksPath);
  return JSON.parse(data);
};

const getById = async (id) => {
  const books = await getAll();
  const oneBook = books.find((b) => b.id === id);
  if (!oneBook) {
    return null;
  }
  return oneBook;
};

module.exports = { getAll, getById };
