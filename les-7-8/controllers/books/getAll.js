const { basedir } = global;
const { Book } = require(`${basedir}/models/books`);

const getAll = async (req, res) => {
  const { id: owner } = req.user;
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  const result = await Book.find({ owner }, "-createdAt -updatedAt", {
    skip,
    limit: Number(limit),
  }).populate("owner", "name email");
  // const result = await Book.find({}, "title author");
  res.json(result);
};

module.exports = getAll;
