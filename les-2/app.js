const books = require("./books");

const invokeAction = async ({ action, id, author, title }) => {
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
      const deleBook = await books.removeById(id);
      console.log(deleBook);
      break;

    default:
      break;
  }
};

// invokeAction({ action: "getAll" });
// invokeAction({ action: "getById", id: "6" });
// invokeAction({ action: "add", title: "The opened door", author: "Ben Luis" });
// invokeAction({
//   action: "updateById",
//   id: "9",
//   title: "The closed windows",
//   author: "Ben Luis",
// });
// invokeAction({ action: "removeById", id: "9" });
