const express = require("express");

const { basedir } = global;

const { ctrlWrapper } = require("../../helpers");
const { auth } = require(`${basedir}/middlewares`);

const ctrl = require(`${basedir}/controllers/auth`);

const router = express.Router();

router.post("/register", ctrlWrapper(ctrl.register));
router.post("/login", ctrlWrapper(ctrl.login));
router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));
router.get("/logout", auth, ctrlWrapper(ctrl.logout));

module.exports = router;
