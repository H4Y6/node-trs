const { basedir } = global;
const { User } = require(`${basedir}/models/user`);

const logut = async (req, res) => {
  const token = "";
  const { _id: id } = req.user;
  await User.findByIdAndUpdate(id, { token });
  res.json({ token });
};

module.exports = logut;
