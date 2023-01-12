const { json } = require("express");
const express = require("express");

const books = require("../../models/books");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await books.getAll();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    // console.log(req.params);
    const { id } = req.params;
    const idBook = await books.getById(id);
    if (!idBook) {
      res.status(404).json({ message: "Not found" });
    }
    res.json(idBook);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
