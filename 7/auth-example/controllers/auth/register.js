const { schemas } = require("../../models/user");

const { basedir } = global;

const { User } = require(`${basedir}/models/user`);
const { createError } = require(`${basedir}/helpers`);

const register = async (req, res) => {
  const { error } = schemas.register.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw createError(409, `${email} exists`);
  }

  const result = await User.create(req.body);
  res.status(201).json({ name: result.name, email: result.email });
};

module.exports = register;
