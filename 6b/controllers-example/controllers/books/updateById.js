const { Book, schemas } = require("../../models/book");
const { createError } = require("../../helpers");

const updateById = async (req, res) => {
  const { error } = schemas.add.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const { id } = req.params;
  const { title, author } = req.body;
  const result = await Book.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw createError(404);
  }
  res.status(201).json(result);
};

module.exports = updateById;
