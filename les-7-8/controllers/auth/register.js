const { basedir } = global;
const { createError } = require(`${basedir}/helpers`);
const { User, schemas } = require(`${basedir}/models/users`);

const register = async (req, res) => {
  const { error } = schemas.register.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
};

module.exports = register;
