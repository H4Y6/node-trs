const { Contact } = require("../models/contacts");
const { createError } = require("../helpers");

const deleteById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Contact.findByIdAndRemove(id);
    if (!result) {
      throw createError(404);
    }
    res.json("Contact deleted");
  } catch (error) {
    next(error);
  }
};

module.exports = deleteById;
