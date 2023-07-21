const { basedir } = global;
const { Contact } = require(`${basedir}/models/contact`);
const { createError } = require(`${basedir}/helpers`);

const removeById = async (req, res) => {
  const { id: _id } = req.params;
  const result = await Contact.findByIdAndRemove(_id);
  if (!result) {
    throw createError(404);
  }
  res.json({ message: "Contact`s deleted" });
};

module.exports = removeById;
