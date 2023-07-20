const { createError } = require("../../helpers");
const { Contact, schemas } = require("../../models/contact");

const update = async (req, res) => {
  const { error } = schemas.add.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true, // omit {new: true} to result in an old doc. as default
  });
  if (!result) {
    throw createError(404);
  }
  res.status(201).json(result);
};

module.exports = update;
