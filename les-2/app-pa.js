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
    case "removeById":
      const removeBook = await books.removeById(id);
      console.log(removeBook);
      break;
  }
};

// const actionIdx = process.argv.indexOf("--action");
// if (actionIdx !== -1) {
//   const action = process.argv[actionIdx + 1];
//   invokeAction({ action });
// }

const actionIdx = process.argv.indexOf("--action");
if (actionIdx === -1) {
  //   const action = process.argv[actionIdx + 1];
  return;
}
invokeAction({
  action: process.argv[actionIdx + 1],
});

const idIdx = process.argv.indexOf("--id");
if (idIdx === -1) {
  return;
}
invokeAction({
  action: process.argv[actionIdx + 1],
  id: process.argv[actionIdx + 3],
});
