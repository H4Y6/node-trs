const Jimp = require("jimp");
const fs = require("fs/promises");
const path = require("path");

const { basedir } = global;
const { User } = require(`${basedir}/models/user`);

const avatarsDir = path.join(basedir, "public", "avatars");

const setAvatar = async (req, res) => {
  try {
    const { path: tempPath, originalname } = req.file;
    const avatar = await Jimp.read(tempPath);
    avatar.resize(250, 250).quality(77).write(tempPath);
    const uploadPath = path.join(avatarsDir, originalname);
    await fs.rename(tempPath, uploadPath);
    const { _id } = req.user;
    const [extention] = originalname.split(".").reverse();
    const newName = `${_id}.${extention}`;
    const avatarURL = path.join("avatars", newName);
    await User.findByIdAndUpdate(_id, { avatarURL });
    res.json({ avatarURL });
  } catch (error) {
    await fs.unlink(req, file, path);
    throw error;
  }
};

module.exports = setAvatar;
