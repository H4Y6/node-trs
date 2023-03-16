const fs = require("fs/promises");
const path = require("path");

const booksPath = path.join(__dirname, "books.json");

const getAll = async () => {
  const data = await fs.readFile(booksPath);
  return JSON.parse(data);
};

module.exports = { getAll };
