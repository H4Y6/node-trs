const express = require("express");

const { basedir } = global;
const Book = require(`${basedir}/models/book`);
const { createError } = require(`${basedir}/helpers`);

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await Book.find({}, "-createdAt -updatedAt");
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Book.findById(id, "-createdAt -updatedAt");
    if (!result) {
      throw createError(404);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
