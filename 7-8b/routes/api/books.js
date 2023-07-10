const express = require("express");
const { basedir } = global;
const Joi = require("joi");

const { Book } = require(`${basedir}/models/book`);

const { createError } = require(`${basedir}/helpers`);
const { ctrlWrapper } = require(`${basedir}/helpers`);
const ctrl = require(`${basedir}/controllers/books`);

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

router.delete("/:id", ctrlWrapper(ctrl.removeById));

router.patch("/:id/favorite", ctrlWrapper(ctrl.updateFavorite));

module.exports = router;
