const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contacts = require("./contacts.json");
const contactsPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

module.exports = { listContacts };
