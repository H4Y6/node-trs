const express = require("express");

const ctrl = require(`../../controllers/books`);

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", ctrl.getById);

router.post("/", ctrl.add);

router.put("/:id", ctrl.updateById);

router.patch("/:id/favorite", ctrl.updateStatus);

router.delete("/:id", ctrl.deleteById);

module.exports = router;
