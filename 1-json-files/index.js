const contacts = require("./contacts");

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
  }
};

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "1a" });

// invokeAction({
//   action: "add",
//   name: "Dan",
//   email: "dan@poer.td",
//   phone: "09-457619-567",
// });
invokeAction({ action: "remove", id: "11a" });
