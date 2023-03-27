const express = require("express");

const ctrl = require("../../controllers");
const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", ctrl.getById);

router.post("/", ctrl.add);

router.delete("/:id", ctrl.deleteById);

router.put("/:id", ctrl.updateById);

router.patch("/:id/favorite", ctrl.updateStatus);

module.exports = router;
