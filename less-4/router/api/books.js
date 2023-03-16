const express = require("express");
const books = require("../../models/books");
const createError = require("../../helpers");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await books.getAll();
    res.json(result);
  } catch (error) {
    // res.status(500).json({ message: "Server error" });
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await books.getById(id);
    if (!result) {
      // return res.status(404).json({ message: "Not found" });
      // const error = new Error("Not found");
      // error.status = 404;
      // throw error;
      throw createError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { title, author } = req.body;
    const result = await books.add(title, author);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
