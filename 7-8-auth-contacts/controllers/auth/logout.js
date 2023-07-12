const { User } = require("../../models/user");

const logout = async (req, res) => {
  const token = "";
  await User.findByIdAndUpdate(req.user._id, { token });
  res.json({ token });
};

module.exports = logout;
