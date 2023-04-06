const { basedir } = global;

const { createError } = require(`${basedir}/helpers`);
const { Book, schemas } = require(`${basedir}/helpers`);

const add = async (req, res, next) => {
  try {
    const { error } = schemas.add.validate(req.body);
    if (error) {
      throw createError(400, error.message);
    }
    const result = await Book.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = add;
