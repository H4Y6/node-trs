const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contacts = require("./contacts.json");
const contactsPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (contactId) => {};
const addContact = async (name, email, phone) => {};
const removeContact = async (contactId) => {};
const updateContact = async (contactId, name, email, phone) => {};

module.exports = { listContacts };
