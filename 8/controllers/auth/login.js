const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { basedir } = global;

const { User, schemas } = require(`${basedir}/models/users`);
const { createError } = require(`${basedir}/helpers`);

const login = async (req, res, next) => {
  const { error } = schemas.login.validate(req.body);
  if (error) {
    throw createError(400);
  }
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw createError(401, "Wrong email.");
  }
  try {
    const comparePassword = bcrypt.compare(password, user.password);
    if (!comparePassword) {
      throw createError(401, "Wrong password");
    }
    const payload = { id: user._id };
    const token = jwt.sign(payload);
    res.json(token);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = login;
