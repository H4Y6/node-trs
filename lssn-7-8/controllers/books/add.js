const { basedir } = global;
const { Book, schemas } = require(`${basedir}/models/books`);
const { createError } = require(`${basedir}/helpers`);

const add = async (req, res, next) => {
  const { error } = schemas.add.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const { id: owner } = req.user;
  const result = await Book.create({ ...req.body, owner });
  res.status(201).json(result);
};

module.exports = add;
