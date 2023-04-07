const { basedir } = global;

const { createError } = require(`${basedir}/helpers`);
const { Book, schemas } = require(`${basedir}/models/book`);

const add = async (req, res) => {
  const { error } = schemas.add.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const result = await Book.create(req.body);
  res.status(201).json(result);
};

module.exports = add;
