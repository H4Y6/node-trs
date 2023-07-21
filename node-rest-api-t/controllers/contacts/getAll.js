const { basedir } = global;
const { Contact } = require(`${basedir}/models/contact`);

const getAll = async (req, res) => {
  const { id: owner } = req.user;
  const result = await Contact.find({ owner }, "-createdAt -updatedAt").populate(
    "owner",
    "email subscription"
  );
  res.json(result);
};

module.exports = getAll;
