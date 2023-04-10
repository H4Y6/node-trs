const { basedir } = global;
const { Contact } = require(`${basedir}/models/contacts`);

const getAll = async (req, res, next) => {
  const result = await Contact.find({}, "name email phone favorite");
  res.json(result);
};

module.exports = getAll;
