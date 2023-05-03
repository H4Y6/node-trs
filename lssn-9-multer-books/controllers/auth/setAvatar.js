const patch = require("path");
const fs = require("fs/promises");

const { basedir } = global;
const { User } = require(`${basedir}/models/users`);
const avatarsDir = patch.join(basedir, "public", "avatars");

const setAvatar = async (req, res) => {
  try {
    const { _id } = req.user;
    const { path: tempPath, originalname } = req.file;
    const uploadPath = patch.join(avatarsDir, originalname);
    await fs.rename(tempPath, uploadPath);
    const avatarURL = patch.join("avatars", originalname);
    await User.findByIdAndUpdate(_id, { avatarURL });
    res.json({ avatarURL });
  } catch (error) {
    await fs.unlink(req.file.path);
    throw error;
  }
};

module.exports = setAvatar;
