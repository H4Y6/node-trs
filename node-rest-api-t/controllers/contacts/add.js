const { basedir } = global;
const { createError } = require(`${basedir}/helpers`);
const { Contact, schemas } = require(`${basedir}/models/contact`);

const add = async (req, res) => {
  const { error } = schemas.add.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

module.exports = add;
