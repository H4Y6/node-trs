const express = require("express");

const { basedir } = global;
const { ctrlWrapper } = require(`${basedir}/helpers`);
const ctrl = require(`${basedir}/controllers/books`);

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", ctrlWrapper(ctrl.getById));

router.post("/", ctrlWrapper(ctrl.add));

router.put("/:id", ctrlWrapper(ctrl.updateById));

router.delete("/:id", ctrlWrapper(ctrl.deleteById));

router.patch("/:id/favorite", ctrlWrapper(ctrl.updateStatus));

module.exports = router;
