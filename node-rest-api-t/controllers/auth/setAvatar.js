const fs = require("fs/promises");
const path = require("path");
const jimp = require("jimp");

const { basedir } = global;
const { User } = require(`${basedir}/models/user`);

const avatarsDir = path.join(basedir, "public", "avatars");

const setAvatar = async (req, res) => {
  try {
    const { path: tmpPath, originalname } = req.file;
    const { _id } = req.user;
    const avatarImg = await jimp.read(tmpPath);
    avatarImg.resize(250, 250).quality(77).write(tmpPath);
    const [extention] = originalname.split(".").reverse();
    const newName = `${_id}.${extention}`;
    const uploadPath = path.join(avatarsDir, newName);
    await fs.rename(tmpPath, uploadPath);
    const avatarURL = path.join("avatars", newName);
    await User.findByIdAndUpdate(_id, { avatarURL });
    res.json({ avatarURL });
  } catch (error) {
    await fs.unlink(req.file.path);
    throw error;
  }
};

module.exports = setAvatar;
