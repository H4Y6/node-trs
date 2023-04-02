const bcrypt = require("bcryptjs");

const { basedir } = global;

const { User, schemas } = require(`${basedir}/models/user`);

const { createError } = require(`${basedir}/helpers`);

const login = async (req, res) => {
  const { error } = schemas.login.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw createError(401, "Wrong email");
  }
  const comparePassword = bcrypt.compare(password, user.password);
  if (!comparePassword) {
    throw createError(401, "Wrong password");
  }
  const token = "jhvhjdvsbauiuirkfvn";
  res.json({ token });
};

module.exports = login;
