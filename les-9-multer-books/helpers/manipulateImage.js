const Jimp = require("jimp");

const manipulateImage = async (tempPath) => {
  try {
    const img = await Jimp.read(tempPath);
    img.resize(250, 250).quality(88).grayscale().write(tempPath);
  } catch (error) {
    console.error(error);
  }
};

module.exports = manipulateImage;
