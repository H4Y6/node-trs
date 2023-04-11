const express = require("express");

const { basedir } = global;

const { ctrlWrapper } = require(`${basedir}/helpers`);

const ctrl = require(`${basedir}/controllers/books`);

const { auth } = require(`${basedir}/middlewares`);

const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.getAll));

router.get("/:id", auth, ctrlWrapper(ctrl.getById));

router.post("/", auth, ctrlWrapper(ctrl.add));

router.put("/:id", auth, ctrlWrapper(ctrl.updateById));

router.patch("/:id/favorite", auth, ctrlWrapper(ctrl.updateStatus));

router.delete("/:id", auth, ctrlWrapper(ctrl.deleteById));

module.exports = router;
