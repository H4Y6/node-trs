const express = require("express");

const { basedir } = global;
const ctrl = require(`${basedir}/controllers/auth`);
const { ctrlWrapper } = require(`${basedir}/helpers`);

const router = express.Router();

router.post("/register", ctrlWrapper(ctrl.register));
router.post("/login", ctrlWrapper(ctrl.login));

module.exports = router;
