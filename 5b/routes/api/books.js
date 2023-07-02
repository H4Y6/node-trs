const express = require("express");
const Joi = require("joi");
const { Book } = require("../../models/book");
const { createError } = require("../../helpers");

const router = express.Router();

const bookAddSchema = Joi.object({
  title: Joi.string().required(),
  favorite: Joi.boolean(),
  genre: Joi.string().valueOf("fantastic", "love").required(),
  isbn: Joi.string()
    .pattern(/[0-9]{3}-[0-9]{1}-[0-9]{3}-[0-9]{5}-[0-9]{1}/)
    .required(),
});

const bookUpdateSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

router.get("/", async (req, res, next) => {
  try {
    // const result = await Book.find({}, "title author");
    const result = await Book.find({}, "-createdAt -updatedAt");
    res.status(200).json(result);
  } catch (error) {
    // res.status(500).json({ message: "Not found" });
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    // const result = await Book.findOne({ _id: id }, "-isbn");
    const result = await Book.findById(id, "-createdAt -updatedAt");
    if (!result) {
      throw createError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { error } = bookAddSchema.validate(req.body);
    if (error) {
      throw createError(400, error.message);
    }
    const result = await Book.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { error } = bookAddSchema.validate(req.body);
    if (error) {
      throw createError(400, error.message);
    }
    const { id } = req.params;
    const { title, author } = req.body;
    const result = await Book.findByIdAndUpdate(id, req.body, { new: true });
    if (!result) {
      throw createError(404);
    }
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

router.patch("/:id/favorite", async (req, res, next) => {
  try {
    const { error } = bookUpdateSchema.validate(req.body);
    if (error) {
      throw createError(400, error.message);
    }
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body, { new: true });
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
    const result = await Book.findByIdAndRemove(id);
    if (!result) {
      throw createError(404);
    }
    res.json({ message: "Message deleted" });
    // res.json(result);
    // res.status(204).json({ message: "Message deleted" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
