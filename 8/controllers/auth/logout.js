const { basedir } = global;
const { User } = require(`${basedir}/models/users`);

const logout = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: "" });
};

module.exports = logout;
