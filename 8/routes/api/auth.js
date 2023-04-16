const express = require("express");
const { basedir } = global;
const ctrl = require(`${basedir}/controllers/auth`);
const { ctrlWrapper } = require(`${basedir}/helpers`);
const { auth } = require(`${basedir}/middlewares`);

const router = express.Router();

module.exports = router;
