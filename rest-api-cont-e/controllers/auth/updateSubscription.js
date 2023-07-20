const { createError } = require("../../helpers");
const { User, schemas } = require("../../models/user");

const updateSubscription = async (req, res) => {
  const { error } = schemas.updateSubscription.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const { id } = req.params;
  const result = await User.findByIdAndUpdate(id, req.body, {
    new: true, // results in a new doc.
  });
  if (!result) {
    throw createError(404);
  }
  res
    .status(201)
    .json({
      id: result.id,
      email: result.email,
      subscription: result.subscription,
    });
};

module.exports = updateSubscription;
