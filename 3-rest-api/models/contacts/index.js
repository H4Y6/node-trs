const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const idContact = contacts.find((c) => c.id === contactId);
  return idContact ? idContact : null;
};
const addContact = async (name, email, phone) => {};
const removeContact = async (contactId) => {};
const updateContact = async (contactId, name, email, phone) => {};

module.exports = { listContacts, getContactById };
