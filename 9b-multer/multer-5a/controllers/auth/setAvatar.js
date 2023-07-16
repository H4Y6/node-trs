const path = require("path");
const fs = require("fs/promises");
const { basedir } = global;
const { User } = require(`${basedir}/models/user`);

const avatarsDir = path.join(basedir, "public", "avatars");

const setAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempPath, originalname } = req.file;
  const [extention] = originalname.split(".").reverse();
  const newName = `${_id}.${extention}`;
  const uploadPath = path.join(avatarsDir, newName);
  await fs.rename(tempPath, uploadPath);
  const avatarURL = path.join("avatars", newName);
  await User.findByIdAndUpdate(_id, { avatarURL });
  res.json({ avatarURL });
};

module.exports = setAvatar;
