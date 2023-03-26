const express = require("express");

const { ctrlWrapper } = require("../../helpers");

const router = express.Router();

const ctrl = require("../../controllers/books");

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", ctrlWrapper(ctrl.getById));

router.post("/", ctrlWrapper(ctrl.add));

router.put("/:id", ctrlWrapper(ctrl.updateById));

router.patch("/:id/favorite", ctrlWrapper(ctrl.updateFavorite));

router.delete("/:id", ctrlWrapper(ctrl.deleteById));

module.exports = router;
