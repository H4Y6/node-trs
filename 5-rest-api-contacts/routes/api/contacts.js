const express = require("express");

const ctrl = require("../../controllers/contacts");
const { ctrlWrapper } = require("../../helpers");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:contactId", ctrlWrapper(ctrl.getById));

router.post("/", ctrlWrapper(ctrl.add));

router.put("/:contactId", ctrlWrapper(ctrl.updateById));

router.patch("/:contactId/favorite", ctrlWrapper(ctrl.updateStatus));

router.delete("/:contactId", ctrlWrapper(ctrl.deleteById));

module.exports = router;
