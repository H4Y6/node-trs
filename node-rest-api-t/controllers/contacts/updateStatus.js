const { basedir } = global;
const { createError } = require(`${basedir}/helpers`);
const { Contact, schemas } = require(`${basedir}/models/contact`);

const updateStatus = async (req, res) => {
  const { error } = schemas.updateStatus.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const { id: _id } = req.params;
  const result = await Contact.findByIdAndUpdate(_id, req.body, { new: true });
  if (!result) {
    throw createError(400, { message: "Missing field favorite" });
  }
  res.json(result);
};

module.exports = updateStatus;
