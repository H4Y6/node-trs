const { basedir } = global;
const { Contact } = require(`${basedir}/models/contact`);
const { createError } = require(`${basedir}/helpers`);

const getById = async (req, res) => {
  const { id: _id } = req.params;
  const result = await Contact.findById(_id, "-createdAt -updatedAt");
  if (!result) {
    throw createError(404);
  }
  res.json(result);
};

module.exports = getById;
