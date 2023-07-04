const express = require("express");
const { basedir } = global;
const ctrl = require(`${basedir}/controllers/books`);

const router = express.Router();

router.get("/", ctrl.getAll);
router.get("/:id", ctrl.getById);

module.exports = router;
