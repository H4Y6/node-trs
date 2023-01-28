const express = require("express");
const router = express.Router();
const contacts = require("../../models/contacts");

router.get("/", async (req, res, next) => {
  const result = await contacts.listContacts();
  res.json(result);
});

module.exports = router;
