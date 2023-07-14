const fs = require("fs/promises");
const path = require("path");

const { basedir } = global;
const { User } = require(`${basedir}/models/user`);

const avatarsDir = path.join(basedir, "public", "avatars");

const setAvatar = async (req, res) => {
  try {
    const { _id } = req.user;
    const { path: tempPath, originalname } = req.file;
    const [extention] = originalname.split(".").reverse();
    const newName = `${_id}.${extention}`;
    const uploadPath = path.join(avatarsDir, newName);
    await fs.rename(tempPath, uploadPath);
    const avatarUrl = path.join("avatars", newName);
    await User.findByIdAndUpdate(_id, { avatarUrl });
    res.json({ avatarUrl });
  } catch (error) {
    await fs.unlink(req.file.originalname);
    throw error;
  }
};

module.exports = setAvatar;
