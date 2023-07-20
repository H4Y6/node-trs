const { basedir } = global;
const bcrypt = require("bcryptjs");

const { User, schemas } = require(`${basedir}/models/user`);

const { createError } = require(`${basedir}/helpers`);

const logout = async (req, res) => {
  const { error } = schemas.login.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw createError(401, "Email wrong");
  }
  const comparePassword = await bcrypt.compare(password, user.password);
  if (!comparePassword) {
    throw createError(401, "Password wrong");
  }
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: "" });
  res.status(204).send();
};

module.exports = logout;
