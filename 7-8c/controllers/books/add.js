const { basedir } = global;
const { createError } = require(`${basedir}/helpers`);
const { Book, schemas } = require(`${basedir}/models/book`);

const add = async (req, res) => {
  const { error } = schemas.add.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const { _id: owner } = req.user;
  const result = await Book.create({ ...req.body, owner });
  res.status(201).json(result);
};

module.exports = add;
