const { basedir } = global;
const { Book } = require(`${basedir}/models/book`);

const getById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Book.findById(id);
  if (!result) {
    return res.status(404).json("Not found");
  }
  res.json(result);
};

module.exports = getById;
