const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { SECRET_KEY } = process.env;

const { basedir } = global;
const { User, schemas } = require(`${basedir}/models/users`);
const { createError } = require(`${basedir}/helpers`);

const login = async (req, res) => {
  const { error } = schemas.login.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw createError(401, ` Wrong email: ${email} .`);
  }
  const comparePassword = await bcrypt.compare(password, user.password);
  if (!comparePassword) {
    throw createError(401, " Wrong password. ");
  }

  const payload = { id: user._id };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "2d" });
  await User.findByIdAndUpdate(user._id, { token });
  res.json(token);
};

module.exports = login;
