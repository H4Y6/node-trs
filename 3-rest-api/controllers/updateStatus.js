const { Contact, schemas } = require("../models/contacts");
const { createError } = require("../helpers");

const updateStatus = async (req, res, next) => {
  try {
    const { error } = schemas.updateStatus.validate(req.body);
    if (error) {
      throw createError(400);
    }
    const { id } = req.params;
    const result = await Contact.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.log(req.body);

    if (!result) {
      throw createError(404);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = updateStatus;
