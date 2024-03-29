const { Book } = require(`${basedir}/models/book`);

const getAll = async (req, res) => {
  const result = await Book.find({}, "-createdAt -updatedAt");
  res.json(result);
};

module.exports = getAll;
