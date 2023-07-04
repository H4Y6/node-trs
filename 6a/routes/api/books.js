const express = require("express");
const { Book } = require("../../controllers/books");
const ctrl = require("../../controllers/books");

const router = express.Router();

router.get("/", ctrl.getAll);
router.get("/:id", ctrl.getById);

module.exports = router;
