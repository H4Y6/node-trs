const express = require("express");

const { basedir } = global;

const ctrl = require(`${basedir}/controllers/auth`);

const { ctrlWrap } = require(`${basedir}/helpers`);

const auth = require(`${basedir}/middlewares`);

const router = express.Router();

router.post("/register", ctrlWrap(ctrl.register));

router.post("/login", ctrlWrap(ctrl.login));

router.get("/current", auth, ctrlWrap(ctrl.getCurrent));

router.get("/logout", auth, ctrlWrap(ctrl.logout));

router.patch("/users/:id", auth, ctrlWrap(ctrl.updateSubscription));

module.exports = router;
