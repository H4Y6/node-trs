const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const books = require("./books");

const invokeAction = async ({ action, id, title, author }) => {
  switch (action) {
    case "getAll":
      const allBooks = await books.getAll();
      console.log(allBooks);
      break;
    case "getById":
      const oneBook = await books.getById(id);
      console.log(oneBook);
      break;
    case "add":
      const newBook = await books.add(title, author);
      console.log(newBook);
      break;
    case "updateById":
      const updateBook = await books.updateById(id, title, author);
      console.log(updateBook);
      break;
    case "deleteById":
      const deleBook = await books.deleteById(id);
      console.log(deleBook);
      break;
  }
};

const arr = hideBin(process.argv);

// const arr2 = process.argv.slice(2);
// console.log(arr);
// console.log(arr2);

const { argv } = yargs(arr);

// const { argv } = yargs(arr2);
// console.log(argv);

invokeAction(argv);
