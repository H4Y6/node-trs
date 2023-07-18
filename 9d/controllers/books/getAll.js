const { Book } = require(`${basedir}/models/book`);

const getAll = async (req, res) => {
  const { id: owner } = req.user;
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  const result = await Book.find({ owner }, "-createdAt -updatedAt -_id", {
    skip,
    limit,
  }).populate("owner", "name email -_id");
  res.json(result);
};

module.exports = getAll;
