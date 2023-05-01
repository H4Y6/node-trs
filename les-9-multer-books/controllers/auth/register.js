const { basedir } = global;
const { createError } = require(`${basedir}/helpers`);
const { User, schemas } = require(`${basedir}/models/users`);
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");

const register = async (req, res) => {
  const { error } = schemas.register.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw createError(409, `Email ${email} exists`);
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const result = await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL,
  });
  res.json({ name: result.name, email: result.email });
};

module.exports = register;
