const { createError } = require("../../helpers");
const { Contact, schemas } = require("../../models/contact");

const updateStatusContact = async (req, res) => {
  const { error } = schemas.updateFavorite.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true, // results in a new doc.
  });
  if (!result) {
    throw createError(404);
  }
  res.status(201).json(result);
};

module.exports = updateStatusContact;
