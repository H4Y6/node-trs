const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { createError } = require("../../helpers");
const { User, schemas } = require("../../models/user");
const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { error } = schemas.login.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw createError(401);
  }
  const comparePassword = await bcrypt.compare(password, user.password);
  if (!comparePassword) {
    throw createError(401, "Email or password`s wrong");
  }
  const payload = { id: user._id };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "22h" });
  await User.findByIdAndUpdate(user._id, { token });
  res.json({ token });
};

module.exports = login;
