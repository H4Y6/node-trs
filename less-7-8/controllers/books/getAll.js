const { Book } = require("../../models/books");

const getAll = async (req, res) => {
  const { id: owner } = req.user;
  // const result = await Book.find({}, "-createdAt -updatedAt");
  const result = await Book.find({ owner }, "title author").populate(
    "owner",
    "name email"
  );
  res.json(result);
};

module.exports = getAll;
