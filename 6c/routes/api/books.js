const express = require("express");
const Joi = require("joi");

const { basedir } = global;
const Book = require(`${basedir}/models/book`);
const { createError } = require(`${basedir}/helpers`);

isbnRegexp = /^\d\d\d-\d-\d{3}-\d{5}-\d$/;

const bookAddSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  genres: Joi.string().valueOf("fantastic", "love", " science").required(),
  isbn: Joi.string().pattern(isbnRegexp).required(),
  favorite: Joi.boolean(),
});

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

router.post("/", async (req, res, next) => {
  try {
    const { error } = bookAddSchema.validate(req.body);
    if (error) throw createError(400, error.message);
    const result = await Book.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
