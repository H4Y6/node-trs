const { basedir } = global;
const { Book } = require(`${basedir}/models/books`);

const getAll = async (req, res) => {
  const { id: owner } = req.user;
  const result = await Book.find({ owner }, "-createdAt -updatedAt").populate(
    "owner",
    "name email"
  );
  res.json(result);
};

module.exports = getAll;
