// const yargs = require("yargs");
// const argv = yargs.argv;

const { Command } = require("commander");
const program = new Command();

const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const result = await contacts.listContacts();
      console.log(result);
      break;
    case "get":
      const aContact = await contacts.getContactById(id);
      console.log(aContact);
      break;
    case "add":
      const newContact = await contacts.addContact();
      console.log(newContact);
      break;
    case "remove":
      const removeContact = await contacts.removeContact(id);
      console.log(removeContact);
      break;
    default:
      // console.warn("\x1B[31m Unknown action type!");
      break;
  }
};

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

invokeAction(argv);

// invokeAction({ action: "get", id: "1a" });
// invokeAction({ action: "list" });
// invokeAction({
//   action: "add",
//   name: "Barxa",
//   email: "ertmnop@poadret.net",
//   phone: "1-3446-9834=3476",
// });
// invokeAction({ action: "remove", id: "11a" });
