const Jimp = require("jimp");

const manipulateImage = async (tempPath) => {
  try {
    const avatar = await Jimp.read(tempPath);
    avatar.resize(250, 250);
    avatar.quality(70);
    avatar.write(tempPath);
  } catch (error) {
    console.log(error);
  }
};

module.exports = manipulateImage;
