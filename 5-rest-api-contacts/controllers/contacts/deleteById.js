const { basedir } = global;
const { Contact } = require(`${basedir}/models/contacts`);
const { createError } = require(`${basedir}/helpers`);

const deleteById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw createError(404);
  }
  res.json({ message: "contact deleted" });
};

module.exports = deleteById;
