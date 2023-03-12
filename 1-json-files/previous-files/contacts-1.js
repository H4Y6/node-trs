const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");
const contactsPath = path.join(__dirname, "db/contacts.json");
console.log(contactsPath);

const updateContacts = async (contacts) => {
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
};

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const idContact = contacts.find((c) => c.id === contactId);
  return idContact ? idContact : null;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((c) => c.id === contactId);
  if (idx !== -1) {
    const [removedContact] = contacts.splice(idx, 1);
    await updateContacts(contacts);
    return removedContact;
  }
  return null;
};

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const newContact = { id: nanoid(), name, email, phone };
  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
};

module.exports = { listContacts, getContactById, removeContact, addContact };
