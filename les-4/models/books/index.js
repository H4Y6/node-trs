const fs = require("fs/promises");

const path = require("path");
const { nanoid } = require("nanoid");
const booksPath = path.join(__dirname, "books.json");

const updateBooks = async (books) => {
  await fs.writeFile(booksPath, JSON.stringify(books, null, 2));
};

const getAll = async () => {
  const data = await fs.readFile(booksPath);
  return JSON.parse(data);
};

const getById = async (id) => {
  const books = await getAll();
  const result = await books.find((b) => b.id === id);
  if (!result) {
    return null;
  }
  return result;
};

const add = async (title, author) => {
  const books = await getAll();
  const newBook = { id: nanoid(), title, author };
  books.push(newBook);
  await updateBooks(books);
  return newBook;
};

const updateById = async (id, title, author) => {
  const books = await getAll();
  const idx = books.findIndex((b) => b.id === id);
  const newBook = { id, title, author };
  books[idx] = newBook;
  await updateBooks(books);
  return newBook;
};

module.exports = { getAll, getById, add, updateById };
