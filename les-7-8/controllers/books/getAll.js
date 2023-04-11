const { basedir } = global;
const { Book } = require(`${basedir}/models/books`);

const getAll = async (req, res) => {
  const result = await Book.find({}, "-createdAt -updatedAt");
  // const result = await Book.find({}, "title author");
  res.json(result);
};

module.exports = getAll;
