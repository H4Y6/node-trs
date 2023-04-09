const express = require("express");
const contacts = require("../../models/contacts");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const data = await contacts.listContacts();
  res.json(data);
});

router.get("/:contactId", async (req, res, next) => {
  const { contactId } = req.params;
  const oneContact = await contacts.getContactById(contactId);
  res.json(oneContact);
});

router.post("/", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.delete("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.put("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
