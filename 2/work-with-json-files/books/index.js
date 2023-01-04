const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

// const booksPath = `${__dirname}/books.json`;
const booksPath = path.join(__dirname, "/books.json");

const updateBooks = async (books) =>
  await fs.writeFile(booksPath, JSON.stringify(books, null, 2));

const getAll = async () => {
  const data = await fs.readFile(booksPath);
  return JSON.parse(data);
};

const getById = async (id) => {
  const books = await getAll();
  const result = books.find((b) => b.id === id);
  //   if (result) {
  //     return result;
  //   }
  //   return null;
  return result ? result : null;
};

const add = async (title, author) => {
  const books = await getAll();
  const newBook = { id: nanoid(), title, author };
  books.push(newBook);
  await updateBooks();
  return newBook;
};

const updateById = async (id, title, author) => {
  const books = await getAll();
  const idx = books.findIndex((b) => b.id === id);
  if (idx === -1) {
    return null;
  }
  const newBook = { id, title, author };
  books[idx] = newBook;
  await updateBooks(books);
  return books[idx];
};

const deleteById = async (id) => {
  const books = await getAll();
  const idx = books.findIndex((b) => b.id === id);
  if (idx === -1) {
    return null;
  }
  const [deleBook] = books.splice(idx, 1);
  await updateBooks(books);
  return deleBook;
};

module.exports = { getAll, getById, add, updateById, deleteById };
