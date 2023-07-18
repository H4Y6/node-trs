const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");

const { basedir } = global;
const { User, schemas } = require(`${basedir}/models/user`);
const { createError } = require(`${basedir}/helpers`);

const register = async (req, res) => {
  const { error } = schemas.register.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw createError(409);
  }
  const hashpassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const result = await User.create({ ...req.body, password: hashpassword, avatarURL });
  res.status(201).json(result);
};

module.exports = register;
