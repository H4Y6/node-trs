const contacts = require("./contacts");
// const argv = require("yargs").argv;
const { Command } = require("commander");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const list = await contacts.listContacts();
      console.log(list);
      break;
    case "get":
      const oneContact = await contacts.getContactById(id);
      console.log(oneContact);
      break;
    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      console.log(newContact);
      break;
    case "remove":
      const removedContact = await contacts.removeContact(id);
      console.log(removedContact);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

invokeAction(argv);

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "1a" });

// invokeAction({
//   action: "add",
//   name: "Dan",
//   email: "dan@poer.td",
//   phone: "09-457619-567",
// });
// invokeAction({ action: "remove", id: "11a" });
