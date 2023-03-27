const Joi = require("joi");

const Contact = require("../models/contacts");
const { createError } = require("../helpers");

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const updateStatus = async (req, res, next) => {
  try {
    console.log(req.body);
    if (!req.body) return res.status(400).json({ message: "Not found" });
    const { error } = updateFavoriteSchema.validate(req.body);
    if (error) {
      throw createError(400);
    }

    const { id } = req.params;
    const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
    if (!result) {
      throw createError(404);
    }
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = updateStatus;
