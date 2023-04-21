const { basedir } = global;
const { User } = require(`${basedir}/models/users`);

const logout = async (req, res) => {
  const { _id } = req.user;
  const result = await User.findByIdAndUpdate(
    _id,
    { token: "" },
    { new: true }
  );
  res.json({ token: result.token });
  // res.status(204).send();
};

module.exports = logout;
