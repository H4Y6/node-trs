const contacts = require("./contacts.js");
const argv = require("yargs").argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const list = await contacts.listContacts();
      console.log(list);
      break;

    case "get":
      const idContact = await contacts.getContactById(id);
      console.log(idContact);
      break;

    case "add":
      const newContact = await contacts.addContact();
      console.log(newContact);
      break;

    case "remove":
      const removedContact = await contacts.removeContact();
      console.log(removedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
