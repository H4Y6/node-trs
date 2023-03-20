const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require(`nanoid`);
const contactsPath = path.join(__dirname, "contacts.json");

const updateContacts = async (contacts) => {
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
};

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const oneContact = contacts.find((c) => c.id === contactId);
  if (!oneContact) {
    return null;
  }
  return oneContact;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((c) => c.id === contactId);
  if (index === -1) {
    return null;
  }
  const [removedContact] = contacts.splice(index, 1);
  await updateContacts(contacts);
  return removedContact;
};

const addContact = async (contact) => {
  const contacts = await listContacts();
  const newContact = { id: nanoid(), ...contact };
  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
};

const updateContact = async (id, contact) => {
  const contacts = await listContacts();
  const i = contacts.findIndex((c) => c.id === id);
  if (i === -1) {
    return null;
  }
  const newContact = { id, ...contact };
  contacts[i] = newContact;
  await updateContacts(contacts);
  return newContact;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
