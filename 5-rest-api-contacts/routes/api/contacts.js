const express = require("express");

const { basedir } = global;

const contacts = require(`${basedir}/models/contacts`);

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await contacts.listContacts();
    res.json(result);
  } catch (error) {
    res.status(404).json({ message: "Not found" });
  }
});

module.exports = router;
