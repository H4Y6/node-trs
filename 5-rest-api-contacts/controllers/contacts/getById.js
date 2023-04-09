const { basedir } = global;
const { Contact } = require(`${basedir}/models/contacts`);
const { createError } = require(`${basedir}/helpers`);

const getById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId, "-createdAt -updatedAt");
  if (!result) {
    throw createError(404);
  }
  res.json(result);
};

module.exports = getById;
