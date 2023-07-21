const { basedir } = global;
const { Contact } = require(`${basedir}/models/contact`);

const getAll = async (req, res) => {
  const result = await Contact.find({}, "-createdAt -updatedAt");
  res.json(result);
};

module.exports = getAll;
