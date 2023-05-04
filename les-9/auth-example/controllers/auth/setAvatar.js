const path = require("path");
const fs = require("fs/promises");
const { unlink } = require("fs");

const { basedir } = global;

const { User } = require(`${basedir}/models/users`);

const avatarsDir = path.join(basedir, "public", "avatars");

const setAvatar = async (req, res) => {
  try {
    const { _id } = req.user;
    const { path: tempPath, originalname } = req.file;
    const uploadPath = path.join(avatarsDir, originalname);
    await fs.rename(tempPath, uploadPath);
    const avatarURL = path.join("public", "avatars", originalname);
    await User.findByIdAndUpdate(_id, { avatarURL });
    res.json({ avatarURL });
  } catch (error) {
    await unlink(req.file.path);
    throw error;
  }
};

module.exports = setAvatar;
