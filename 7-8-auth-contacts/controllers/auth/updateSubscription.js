const { User, schemas } = require("../../models/user");
const { createError } = require("../../helpers");

const updateSubscription = async (req, res) => {
  const { error } = schemas.updateSubscription.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const { _id: id } = req.user;
  await User.findByIdAndUpdate(id, req.body);
  res.json(req.body);
};

module.exports = updateSubscription;
