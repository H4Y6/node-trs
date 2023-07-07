const express = require("express");

const { basedir } = global;

const { auth } = require(`${basedir}/middlewares`);

const ctrl = require(`${basedir}/controllers/books`);

const { ctrlWrapper } = require(`${basedir}/helpers`);

const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.getAll));

router.get("/:id", auth, ctrlWrapper(ctrl.getById));

router.post("/", auth, ctrlWrapper(ctrl.add));

router.put("/:id", auth, ctrlWrapper(ctrl.updateById));

router.delete("/:id", auth, ctrlWrapper(ctrl.removeById));

router.patch("/:id/favorite", auth, ctrlWrapper(ctrl.updateFavorite));

module.exports = router;
