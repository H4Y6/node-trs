const express = require("express");

const { basedir } = global;

const { ctrlWrapper } = require("../../helpers");

const ctrl = require(`${basedir}/controllers`);

const router = express.Router();

router.post("/register", ctrlWrapper(ctrl.register));

module.exports = router;
