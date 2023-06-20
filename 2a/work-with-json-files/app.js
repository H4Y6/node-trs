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

// invokeAction({ action: "getAll" });
// invokeAction({ action: "getById", id: "CTHE0f1kkWwqS5sL2tI8_" });
// invokeAction({ action: "add", title: "Sea", author: "Ben Piles" });
// invokeAction({
//   action: "updateById",
//   id: "AhUTcPJRLRRqQS9GMufLw",
//   title: "Blacea",
//   author: "Ben Piles",
// });
invokeAction({
  action: "deleteById",
  id: "AhUTcPJRLRRqQS9GMufLw",
});
