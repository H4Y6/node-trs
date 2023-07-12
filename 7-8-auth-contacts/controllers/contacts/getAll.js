const { basedir } = global;
const { Contact } = require(`${basedir}/models/contacts`);

const getAll = async (req, res, next) => {
  const { page = 1, limit = 20, favorite = true } = req.query;
  const skip = (page - 1) * limit;
  const { _id: owner } = req.user;
  const result = await Contact.find(
    { owner, favorite },
    "-createdAt, -updatedAt",
    {
      skip,
      limit,
    }
  ).populate("owner", "email subscription -_id");
  res.json(result);
};

module.exports = getAll;
