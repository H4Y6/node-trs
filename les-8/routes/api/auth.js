const express = require("express");

const router = express.Router();

const { basedir } = global;
const ctrl = require(`${basedir}/controllers/auth`);
const { ctrlWrapper } = require(`${basedir}/helpers`);

router.post("/register", ctrlWrapper(ctrl.register));

module.exports = router;
