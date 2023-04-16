const express = require("express");
const Joi = require("joi");

const { basedir } = global;

const { ctrl } = require(`${basedir}/controllers/books`);

const { Book } = require("../../models/books");

const { createError } = require("../../helpers");

const router = express.Router();

const bookAddSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  favorite: Joi.boolean(),
  genres: Joi.string().valueOf("fancy", "love").required(),
  isbn: Joi.string()
    .pattern(/\d{3}-\d{3}-\d{4}-\d{2}-\d/)
    .required(),
});
const updateStatusSchema = Joi.object({
  favorite: Joi.boolean(),
});

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", ctrlWrapper(ctrl.getById));

router.post("/", ctrlWrapper(ctrl.add));

router.put("/:id", ctrlWrapper(ctrl.updateById));

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndRemove(id);
    if (!result) {
      throw createError(404);
    }
    // res.status(204).send()
    res.json({
      message: "Book deleted",
    });
  } catch (error) {
    next(error);
  }
});

router.patch("/:id/favorite", ctrlWrapper(ctrl.updateStatus));

module.exports = router;
