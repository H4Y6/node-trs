const express = require("express");

const { basedir } = global;

const ctrl = require(`${basedir}/controllers/books`);
const { ctrlWrapper } = require(`${basedir}/helpers`);
const { auth } = require(`${basedir}/middlewares`);

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", ctrlWrapper(ctrl.getById));

router.post("/", auth, ctrlWrapper(ctrl.add));

router.put("/:id", ctrlWrapper(ctrl.updateById));

router.delete("/:id", ctrlWrapper(ctrl.removeById));

router.patch("/:id/favorite", ctrlWrapper(ctrl.updateFavorite));

module.exports = router;
