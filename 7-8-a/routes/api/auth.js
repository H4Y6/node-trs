const expess = require("express");

const { basedir } = global;
const { ctrlWrapper } = require(`${basedir}/helpers`);
const ctrl = require(`${basedir}/controllers/auth`);

const router = expess.Router();

router.post("/register", ctrlWrapper(ctrl.register));

module.exports = router;
