const { basedir } = global;
const { Contact } = require(`${basedir}/models/contacts`);

const getAll = async (req, res, next) => {
  const result = await Contact.find({}, "-createdAt -updatedAt");
  res.json(result);
};

module.exports = getAll;
