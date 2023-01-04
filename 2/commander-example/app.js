const { program } = require("commander");

const books = require("./books");

const invokeAction = async ({ action, id, title, author }) => {
  switch (action) {
    case "getAll":
      const allBooks = await books.getAll();
      console.log(allBooks);
      break;
    case "getById":
      const idBook = await books.getById(id);
      console.log(idBook);
      break;
    case "add":
      const addBook = await books.add(title, author);
      console.log(addBook);
      break;
    case "updateById":
      const updateBook = await books.updateById(id, title, author);
      console.log(updateBook);
      break;
    case "deleteById":
      const deleBooks = await books.deleteById(id);
      console.log(deleBooks);
      break;
  }
};

// invokeAction({action: 'getAll'})
// invokeAction({ action: "getById", id: "8a" });
// invokeAction({ action: "add", title: "Oscar", author: "Ben Strap" });
// invokeAction({
//   action: "updateById",
//   id: "pJ2k3SY7LanxXNdZ-7pjf",
//   title: "Oscar",
//   author: "Benjamin Satrap",
// });
// invokeAction({ action: "deleteById", id: "pJ2k3SY7LanxXNdZ-7pjf" });

program
  .option("-a, --action <type>")
  .option("-i, --id <type>")
  .option("-t, --title <type>")
  .option("-at, --author <type>");

program.parse(process.argv);
const options = program.opts();
invokeAction(options);
