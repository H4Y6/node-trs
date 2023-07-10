const { basedir } = global;
const { Book } = require(`${basedir}/models/book`);

const getAll = async (req, res) => {
  const result = await Book.find({}, "-createdAt -updatedAt").populate(
    "owner",
    "name email -_id"
  );
  res.json(result);
};

module.exports = getAll;
