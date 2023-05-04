const path = require("path");
const fs = require("fs/promises");

const { basedir } = global;

const { User } = require(`${basedir}/models/users`);
const { manipulateImage } = require(`${basedir}/helpers`);

const avatarsDir = path.join(basedir, "public", "avatars");

const setAvatar = async (req, res) => {
  try {
    const { _id } = req.user;
    const { path: tempPath, originalname } = req.file;
    manipulateImage(tempPath);
    const [extension] = originalname.split(".").reverse();
    const newName = `${_id}.${extension}`;
    const uploadPath = path.join(avatarsDir, newName);
    await fs.rename("temp/img.jpg", uploadPath);
    await fs.unlink(req.file.path);
    const avatarURL = path.join("avatars", newName);
    await User.findByIdAndUpdate(_id, { avatarURL });
    res.json({ avatarURL });
  } catch (error) {
    await fs.unlink(req.file.path);
    throw error;
  }
};

module.exports = setAvatar;
