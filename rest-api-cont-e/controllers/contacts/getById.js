const { createError } = require("../../helpers");
const { Contact } = require("../../models/contact");

const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  // findOne({ _id: contactId }) : <the same resulted>
  if (!result) {
    throw createError(404);
  }

  return res.json(result);
};

module.exports = getById;
