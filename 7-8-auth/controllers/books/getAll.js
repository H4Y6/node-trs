const { basedir } = global;
const { Book } = require(`${basedir}/models/book`);

const getAll = async (req, res) => {
  const result = await Book.find({}, "-createdAt -updatedAt").populate(
    "owner",
    "name email"
  );
  res.status(200).json(result);
};

module.exports = getAll;
