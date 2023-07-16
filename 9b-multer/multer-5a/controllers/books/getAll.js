const { basedir } = global;

const { Book } = require(`${basedir}/models/book`);

const getAll = async (req, res) => {
  // const result = await Book.find({}, "title author");
  const result = await Book.find({}, "-createdAt -updatedAt");
  res.json(result);
};

module.exports = getAll;
