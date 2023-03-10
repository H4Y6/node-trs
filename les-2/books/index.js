const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

/*
1. Get all books.
2. Get the book by id.
3. Add a book.
4. Update the book by id.
5. Remove the book by id.
*/

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
  const result = books.find((b) => b.id === id);
  return result ? result : null;
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
  if (idx === -1) {
    return null;
  }
  books[idx] = { id, title, author };
  await updateBooks(books);
  return books[idx];
};

const removeById = async (id) => {
  const books = await getAll();
  const idx = books.findIndex((b) => b.id === id);
  if (idx === -1) {
    return null;
  }
  const [removeBook] = books.splice(idx, 1);
  await updateBooks(books);
  return removeBook;
};

module.exports = { getAll, getById, add, updateById, removeById };
