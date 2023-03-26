const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/books");

router.get("/", ctrl.getAll);

router.get("/:id", ctrl.getById);

router.post("/", ctrl.add);

router.put("/:id", ctrl.updateById);

router.patch("/:id/favorite", ctrl.updateFavorite);

router.delete("/:id", ctrl.deleteById);

module.exports = router;
