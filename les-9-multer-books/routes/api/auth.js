const express = require("express");

const router = express.Router();

const { basedir } = global;
const ctrl = require(`${basedir}/controllers/auth`);
const { ctrlWrapper } = require(`${basedir}/helpers`);
const { auth } = require(`${basedir}/middlewares`);

router.post("/register", ctrlWrapper(ctrl.register));
router.post("/login", ctrlWrapper(ctrl.login));
router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));
router.get("/logout", auth, ctrlWrapper(ctrl.logout));
router.paatch("/avatars", auth, ctrlWrapper(ctrl.setAvatar));

module.exports = router;
