const argv = require("yargs").argv;

const contacts = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.log(allContacts);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
      break;
  }
}

invokeAction(argv);
