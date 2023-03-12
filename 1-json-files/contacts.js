const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const path = require("path");
const contactsPath = path.join(__dirname, "db/contacts.json");

async function updateContacts(list) {
  await fs.writeFile(contactsPath, JSON.stringify(list, null, 2));
}

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
}

async function getContactById(contactId) {
  const list = await listContacts();
  const result = list.find((contact) => contact.id === contactId);
  return result ? result : null;
}

async function removeContact(contactId) {
  const list = await listContacts();
  const idx = list.findIndex((contact) => contact.id === contactId);
  if (idx === -1) {
    return null;
  }
  {
    [removedContact] = list.splice(idx, 1);
    await updateContacts(list);
    return removedContact;
  }
}

async function addContact(name, email, phone) {
  const list = await listContacts();
  const newContact = { id: nanoid(), name, email, phone };
  list.push(newContact);
  await updateContacts(list);
  return newContact;
}

module.exports = { listContacts, getContactById, addContact, removeContact };
