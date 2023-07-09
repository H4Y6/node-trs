const logout = async (req, res) => {
  req.user.token = "";

  res.json("Token deleted");
};

module.exports = logout;
