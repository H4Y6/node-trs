const jwt = require("jsonwebtoken");

const { basedir } = global;
const { createError } = require(`${basedir}/helpers`);
const { User } = require(`${basedir}/models/user`);

const { SECRET_key } = process.env;

const auth = async (req, res, next) => {
  const { authorization } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    next(createError(401));
  }
  try {
    const { id } = jwt.verify(token, SECRET_key);
    const user = await User.findById(id);
    req.user = user;
    next();
  } catch (error) {
    next(createError(401));
  }
};

module.exports = auth;
