const path = require("path");
const fs = require("fs/promises");

const { basedir } = global;
const avatarsDir = path.join(basedir, "public", "avatars");

const { User } = require(`${basedir}/models/user`);

const setAvatar = async (req, res) => {
  try {
    const { _id } = req.user;
    const { path: tempPath, originalname } = req.file;
    const [extension] = originalname.split(".").reverse();
    const newName = `${_id}.${extension}`;
    const uploadPath = path.join(avatarsDir, newName);
    await fs.rename(tempPath, uploadPath);
    const avatarsURL = path.join("avatars", newName);
    await User.findByIdAndUpdate(_id, { avatarsURL });
    res.json({ avatarsURL });
  } catch (error) {
    await fs.unlink(req.file.path);
    throw error;
  }
};

module.exports = setAvatar;
