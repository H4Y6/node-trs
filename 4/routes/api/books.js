const books = require("../../models/books");

const express = require("express");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await books.getAll();
    res.status(200).json(result);
  } catch (error) {
    return res.json({ message: "Server error" });
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await books.getById(id);
    result
      ? res.status(200).json(result)
      : res.status(404).json({ message: "Not found" });
  } catch (error) {
    return res.json({ message: "Server error" });
  }
});

module.exports = router;
