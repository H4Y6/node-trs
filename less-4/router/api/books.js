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
    const { id } = req.params;
    const result = await books.getById(id);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
