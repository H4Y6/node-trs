const Jimp = require("jimp");
const manipulateImg = async (tempPath) => {
  try {
    const img = await Jimp.read(tempPath);
    img.resize(250, 250).quality(69).grayscale().write(tempPath);
  } catch (error) {
    console.error(error);
  }
};

module.exports = manipulateImg;
