const Jimp = require("jimp");

const manipulateImage = async (tempPath) => {
  try {
    const image = await Jimp.read(tempPath);
    image.resize(250, 250);
    image.quality(79);
    image.write(tempPath);
  } catch (error) {
    console.error(error);
  }
};

module.exports = manipulateImage;
