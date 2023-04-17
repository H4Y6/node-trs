const express = require("express");

const router = express.Router();

const { basedir } = global;
const ctrl = require(`${basedir}/controllers/auth`);
const { ctrlWrapper } = require(`${basedir}/helpers`);
const { auth } = require(`${basedir}/middlewares`);

router.post("/register", ctrlWrapper(ctrl.register));
router.post("/login", ctrlWrapper(ctrl.login));
router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

module.exports = router;
