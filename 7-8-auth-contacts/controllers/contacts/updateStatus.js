const { basedir } = global;
const { Contact, schemas } = require(`${basedir}/models/contacts`);
const { createError } = require(`${basedir}/helpers`);

const updateStatus = async (req, res, next) => {
  const { error } = schemas.updateStatus.validate(req.body);
  if (error) {
    throw createError(400);
  }
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw createError(404);
  }
  res.json(result);
};

module.exports = updateStatus;
