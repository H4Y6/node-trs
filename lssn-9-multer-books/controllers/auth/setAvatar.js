const patch = require("path");
const Jimp = require("jimp");
const fs = require("fs/promises");

const { basedir } = global;
const { User } = require(`${basedir}/models/users`);
const avatarsDir = patch.join(basedir, "public", "avatars");

const manipulate = (tempPath) => {
  Jimp.read(tempPath)
    .then((img) => {
      return img
        .resize(250, 250) // resize
        .quality(69) // set JPEG quality
        .write("pict.jpg"); // save
    })
    .catch((err) => {
      console.error(err);
    });
};

const setAvatar = async (req, res) => {
  try {
    const { _id } = req.user;
    const { path: tempPath, originalname } = req.file;
    manipulate(tempPath);
    const [extension] = originalname.split(".").reverse();
    const newName = `${_id}.${extension}`;
    const uploadPath = patch.join(avatarsDir, newName);
    await fs.rename("pict.jpg", uploadPath);
    const avatarURL = patch.join("avatars", newName);
    await User.findByIdAndUpdate(_id, { avatarURL });
    res.json({ avatarURL });
  } catch (error) {
    await fs.unlink(req.file.path);
    throw error;
  }
};

module.exports = setAvatar;
