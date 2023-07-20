const express = require("express");
const { basedir } = global;
const { ctrlWrap } = require(`${basedir}/helpers`);
const auth = require(`${basedir}/middlewares`);
const ctrl = require(`${basedir}/controllers/contacts`);

const router = express.Router();

router.get("/", auth, ctrlWrap(ctrl.getAll));

router.get("/:contactId", auth, ctrlWrap(ctrl.getById));

router.post("/", auth, ctrlWrap(ctrl.add));

router.delete("/:contactId", auth, ctrlWrap(ctrl.deleteById));

router.put("/:contactId", auth, ctrlWrap(ctrl.update));

router.patch("/:contactId/favorite", auth, ctrlWrap(ctrl.updateStatusContact));

module.exports = router;
