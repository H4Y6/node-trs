const express = require("express");

const { basedir } = global;

const { ctrlWrapper, ctWr } = require("../../helpers");

const ctrl = require(`${basedir}/controllers/books`);

const router = express.Router();

router.get("/", ctWr(ctrl.getAll));

router.get("/:id", ctWr(ctrl.getById));

router.post("/", ctWr(ctrl.add));

router.put("/:id", ctWr(ctrl.updateById));

router.patch("/:id/favorite", ctWr(ctrl.updateFavorite));

router.delete("/:id", ctWr(ctrl.removeById));

module.exports = router;
