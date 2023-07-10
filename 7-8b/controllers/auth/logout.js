const { basedir } = global;
const { User } = require(`${basedir}/models/user`);

const logout = async (req, res) => {
  const { _id: id } = req.user;
  const token = "";
  await User.findByIdAndUpdate(id, { token });
  res.json({ token });
};

module.exports = logout;
