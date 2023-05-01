const { basedir } = global;
const { createError } = require(`${basedir}/helpers`);
const { User, schemas } = require(`${basedir}/models/users`);
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { error } = schemas.login.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw createError(401, `Email ${email} is wrong.`);
  }
  const comparePassword = await bcrypt.compare(password, user.password);
  if (!comparePassword) {
    throw createError(401, error.message);
  }
  const payload = { id: user._id };
  const token = jwt.sign(payload, SECRET_KEY);

  await User.findByIdAndUpdate(user._id, { token });
  res.json({ token });
};

module.exports = login;
