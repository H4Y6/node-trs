const { basedir } = global;
const { User } = require(`${basedir}/models/user`);

const logout = async (req, res) => {
  const { id } = req.user;
  await User.findByIdAndUpdate(id, { token: "" });
  res.status(204).send();
};

module.exports = logout;
