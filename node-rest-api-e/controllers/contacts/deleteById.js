const { createError } = require("../../helpers");
const { Contact } = require("../../models/contact");

const deleteById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  if (!result) {
    throw createError(404);
  }
  res.json({ message: "Contact deleted", deletedMessage: result });
};

module.exports = deleteById;
