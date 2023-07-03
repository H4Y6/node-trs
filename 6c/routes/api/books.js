const express = require("express");

const { basedir } = global;
const Book = require(`${basedir}/models/book`);

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await Book.find({}, "-createdAt -updatedAt");
    res.json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
