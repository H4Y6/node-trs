const express = require("express");
const books = require("../../models/books");
const router = express.Router();

router.get("/", async (req, res, next) => {
  const result = await books.getAll();
  res.json(result);
});

module.exports = router;
