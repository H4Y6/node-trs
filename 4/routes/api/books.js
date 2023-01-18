const express = require("express");
const Joi = require("joi");
const books = require("../../models/books");
const { createError } = require("../../helpers");

const router = express.Router();
const bookAddSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
});

router.get("/", async (req, res, next) => {
  try {
    const result = await books.getAll();
    res.status(200).json(result);
  } catch (error) {
    // res.status(500).json({ message: "Not found" });
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
    // res.status(500).json({ message: "Server error" });
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { error } = bookAddSchema.validate(req.body);
    if (error) {
      throw createError(400, error.message);
    }
    const result = await books.add(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { error } = bookAddSchema.validate(req.body);
    // const { error } = bookAddSchema.validate(req.body);
    if (error) {
      throw createError(400, error.message);
    }
    const { id } = req.params;
    const { title, author } = req.body;
    const result = await books.updateById(id, title, author);
    // const result = await books.updateById(id, req.body);
    if (!result) {
      throw createError(404);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await books.removeById(id);
    if (!result) {
      throw createError(404);
    }
    // res.json(result);
    // res.status(204).json({ message: "Message deleted" });
    res.json({ message: "Message deleted" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
