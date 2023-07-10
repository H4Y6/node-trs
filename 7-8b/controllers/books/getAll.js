const { basedir } = global;
const { Book } = require(`${basedir}/models/book`);

const getAll = async (req, res) => {
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  const result = await Book.find({}, "-createdAt -updatedAt", {
    skip,
    limit,
  }).populate("owner", "name email -_id");
  res.json(result);
};

module.exports = getAll;
