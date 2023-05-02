const path = require("path");
const fs = require("fs/promises");

const { basedir } = global;

const { manipulateImage } = require(`${basedir}/middlewares`);
const { User } = require(`${basedir}/models/users`);

const avatarsDir = path.join(basedir, "public", "avatars");

const setAvatar = async (req, res) => {
  try {
    const { _id } = req.user;
    const { path: tempPath, originalname } = req.file;
    await manipulateImage(tempPath);
    const [extension] = originalname.split(".").reverse();
    const newName = `${_id}.${extension}`;
    const uploadPath = path.join(avatarsDir, newName);
    await fs.rename(tempPath, uploadPath);
    const avatarURL = path.join("avatars", newName);
    await User.findByIdAndUpdate(_id, { avatarURL });
    res.json({ avatarURL });
  } catch (error) {
    fs.unlink(req.file.path);
    throw error;
  }
};

module.exports = setAvatar;
