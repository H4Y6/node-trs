const { basedir } = global;
const { Book } = require(`${basedir}/models/book`);

const getAll = async (req, res, next) => {
  const result = await Book.find({}, "-createdAt -updatedAt");
  res.status(200).json(result);
};

module.exports = getAll;
