const { basedir } = global;
const { User } = require(`${basedir}/models/user`);

const logout = async (req, res) => {
  const token = "";
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token });
  res.json({ token });
};

module.exports = logout;
